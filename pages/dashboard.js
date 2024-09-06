import React, { useState, useEffect, useCallback, useRef} from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useRouter } from 'next/router';
import { db, auth } from '../firebase';
import { collection, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import styles from '../styles/dashboard.module.css';
import InitiativeSwitcher from '../components/initiativeSwitcher';
import DonationPopup from '../components/donationPopup';
import { FooterCentered } from '../components/footer';
import { HeaderSimple } from '../components/Header';
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const center = {
  lat: -33.93627391449209,
  lng: 18.418980177812504,
};

const mapOptions = {
  zoom: 14,
  disableDefaultUI: true,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  fullscreenControl: false,
};

function Map() {
  const [companies, setCompanies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userInitiative, setUserInitiative] = useState(null);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [map, setMap] = useState(null);
  const [CustomMarker, setCustomMarker] = useState(null);
  const [key, setKey] = useState(Date.now());
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(null);
  const retryCount = useRef(0);
  const maxRetries = 3;
  const router = useRouter();
  const { query } = router;

  const shop = query.shop || '';

  const createCustomMarkerClass = useCallback(() => {
    if (!window.google) return null;

    return class CustomMarker extends window.google.maps.OverlayView {
      constructor(position, map, icon, onClick) {
        super();
        this.position = position;
        this.icon = icon;
        this.onClick = onClick;
        this.setMap(map);
      }

      draw() {
        if (!this.div) {
          this.div = document.createElement('div');
          this.div.style.position = 'absolute';
          this.div.style.cursor = 'pointer';
          this.div.style.width = '25px';
          this.div.style.height = '25px';
          this.div.style.backgroundImage = `url(${this.icon})`;
          this.div.style.backgroundSize = 'cover';
          this.div.style.transition = 'transform 0.3s ease';

          this.div.addEventListener('mouseover', () => {
            this.div.style.transform = 'scale(1.25)';
            this.div.style.zIndex = '1000';
          });

          this.div.addEventListener('mouseout', () => {
            this.div.style.transform = 'scale(1)';
            this.div.style.zIndex = '';
          });

          this.div.addEventListener('click', this.onClick);

          const panes = this.getPanes();
          panes.overlayMouseTarget.appendChild(this.div);
        }

        const point = this.getProjection().fromLatLngToDivPixel(this.position);
        if (point) {
          this.div.style.left = `${point.x - 12.5}px`;
          this.div.style.top = `${point.y - 12.5}px`;
        }
      }

      onRemove() {
        if (this.div) {
          this.div.parentNode.removeChild(this.div);
          this.div = null;
        }
      }
    };
  }, []);

  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'companies'));
        const companiesData = querySnapshot.docs.map(doc => {
          const data = doc.data();
          const [lat, lng] = data.location.split(', ').map(Number);
          return { id: doc.id, name: data.name, location: { lat, lng } };
        });
        setCompanies(companiesData);

        if (shop && shop.trim() !== '') {
          const shopExists = companiesData.some(company => company.name.toLowerCase() === shop.toLowerCase());
          setShowPopup(shopExists);
        } else {
          setShowPopup(false);
        }
      } catch (error) {
        console.error('Error fetching companies: ', error);
      }
    };
    fetchCompanies();

    if (!shop) {
      router.push('/dashboard');
    }
  }, [shop]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          setUserInitiative(userData.initiative);
        } catch (error) {
          console.error('Error fetching user initiative: ', error);
        }
      }
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (map && companies.length > 0 && CustomMarker) {
      companies.forEach(company => {
        new CustomMarker(
          company.location,
          map,
          '/images/coffee-icon.png',
          () => handleMarkerClick(company)
        );
      });
    }
  }, [map, companies, CustomMarker]);

  useEffect(() => {
    const handleRouteChange = (url) => {
      if (url === '/login') {
        router.reload();
      } else if (url.includes('/dashboard')) {
        setKey(Date.now());
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    // Force map to reload when component mounts or key changes
    setMap(null);
  }, [key]);

  const handleConfirmDonation = async () => {
    if (userId && userInitiative) {
      try {
        await setDoc(doc(db, 'donations', `${Date.now()}`), {
          timestamp: new Date(),
          initiative: userInitiative,
          shop: shop,
        });
        console.log('Donation confirmed and added to database');
        setShowPopup(false);
      } catch (error) {
        console.error('Error recording donation: ', error);
      }
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleMarkerClick = (company) => {
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(company.name)}`;
    window.open(googleMapsUrl, '_blank');
  };

  const handleMapLoad = useCallback((map) => {
    setMap(map);
    const CustomMarkerClass = createCustomMarkerClass();
    setCustomMarker(() => CustomMarkerClass);
  }, [createCustomMarkerClass]);

  return (
    <div className={styles.pageWrapperDash}>
      <HeaderSimple />
      <MantineProvider>
        <div className={styles.container}>
          <div className={styles.mapContainer}>
            <LoadScript googleMapsApiKey={API_KEY}>
              <GoogleMap
                key={key}
                mapContainerClassName={styles.mapContainer}
                center={center}
                zoom={12}
                options={mapOptions}
                onLoad={handleMapLoad}
              >
                {/* Custom markers are now handled in the useEffect */}
              </GoogleMap>
            </LoadScript>
            {showPopup && (
              <DonationPopup
                onClose={handleClosePopup}
                onConfirm={handleConfirmDonation}
                shopName={shop}
              />
            )}
          </div>
          {userId && userInitiative && (
            <div className={styles.switcherContainer}>
              <InitiativeSwitcher
                userId={userId}
                currentInitiative={userInitiative}
                onUpdateInitiative={(initiative) => setUserInitiative(initiative)}
                isVisible={isSidebarVisible}
              />
            </div>
          )}
        </div>
      </MantineProvider>
      <FooterCentered />
    </div>
  );
}

export default Map;