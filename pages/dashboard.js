import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScriptNext, Marker } from '@react-google-maps/api';
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

const defaultCenter = {
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

const userLocationIcon = {
  url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'%3E%3Ccircle cx='12' cy='12' r='10' fill='%234285F4' stroke='white' stroke-width='2'/%3E%3C/svg%3E",
  scaledSize: { width: 24, height: 24 },
  origin: { x: 0, y: 0 },
  anchor: { x: 12, y: 12 },
};


function Map() {
  const [companies, setCompanies] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [userId, setUserId] = useState(null);
  const [userInitiative, setUserInitiative] = useState(null);
  const [map, setMap] = useState(null);
  const [CustomMarker, setCustomMarker] = useState(null);
  const [key, setKey] = useState(Date.now());
  const [loadMap, setLoadMap] = useState(true);
  const [username, setUsername] = useState(null); // State to hold the username
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [geolocationError, setGeolocationError] = useState(null);
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
    const getUserLocation = () => {
      if ('geolocation' in navigator) {
        console.log('Requesting user location...');
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            console.log('User location obtained:', { lat: latitude, lng: longitude });
            setUserLocation({ lat: latitude, lng: longitude });
            if (map) {
              map.panTo({ lat: latitude, lng: longitude });
            }
          },
          (error) => {
            console.error('Geolocation error:', error);
            setGeolocationError(error.message);
          },
          { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
        );
      } else {
        console.log('Geolocation is not supported by this browser.');
        setGeolocationError('Geolocation is not supported by this browser.');
      }
    };
  
    getUserLocation();
  }, [map]);
  



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
          console.log('Shop exists:', shopExists)
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
    const handleRouteChange = () => {
      setLoadMap(false);
      setTimeout(() => setLoadMap(true), 3);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid);
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          const userData = userDoc.data();
          setUserInitiative(userData.initiative);
          setUsername(userData.username); // Set the username after fetching
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
    console.log('Map loaded');
    setMap(map);
    const CustomMarkerClass = createCustomMarkerClass();
    setCustomMarker(() => CustomMarkerClass);
  
    if (userLocation) {
      console.log('Panning to user location:', userLocation);
      map.panTo(userLocation);
    }
  }, [createCustomMarkerClass, userLocation]);
  




  return (
    <div className={styles.pageWrapperDash}>
      <HeaderSimple onMenuToggle={setMobileMenuOpen} />
      <MantineProvider>
        <div className={`${styles.container} ${mobileMenuOpen ? styles.pushDown : ''}`}>
          <div className={styles.mapContainer}>
            {loadMap && (
              <LoadScriptNext googleMapsApiKey={API_KEY}>
                <GoogleMap
                  mapContainerClassName={styles.mapContainer}
                  center={userLocation || defaultCenter}
                  zoom={12}
                  options={mapOptions}
                  onLoad={handleMapLoad}
                >
                  {companies.map((company) => (
                    <Marker
                    key={company.id}
                    position={company.location}
                    icon={{
                      url: '/images/coffee-icon.png',
                      scaledSize: window.google.maps.Size(25, 25)
                    }}
                    onClick={() => handleMarkerClick(company)}
                  />
                  ))}
                  {userLocation && (
                    <Marker
                      position={userLocation}
                      icon={userLocationIcon}
                    />
                  )}
                </GoogleMap>
              </LoadScriptNext>
            )}
            {showPopup && (
              <DonationPopup
                onClose={handleClosePopup}
                onConfirm={handleConfirmDonation}
                shopName={shop}
              />
            )}
          </div>
          {geolocationError && (
            <div className={styles.errorMessage}>
              Error getting location: {geolocationError}
            </div>
          )}
          {userId && userInitiative && (
            <div className={styles.switcherContainer}>
              <InitiativeSwitcher
                userId={userId}
                currentInitiative={userInitiative}
                onUpdateInitiative={(initiative) => setUserInitiative(initiative)}
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
