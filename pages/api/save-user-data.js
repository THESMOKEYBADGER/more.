// pages/api/save-user-data.js
import { db } from '../../firebase'; // Correct import path for Firebase
import { collection, doc, setDoc } from 'firebase/firestore';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { initiative, ...userData } = req.body;

    try {
      // Replace with actual user ID or authentication logic
      const userId = userData.uid; // Assume UID is provided in userData
      
      // Save the user data and selected initiative to Firestore
      await setDoc(doc(collection(db, 'users'), userId), {
        ...userData,
        initiative,
      }, { merge: true });

      res.status(200).json({ message: 'User data and initiative saved successfully' });
    } catch (error) {
      console.error('Error saving user data:', error);
      res.status(500).json({ error: 'Failed to save user data' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
