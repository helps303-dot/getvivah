// Firebase Configuration Template
// Replace with your actual Firebase config from Firebase Console

import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { getFirestore, collection, addDoc, getDocs, query, where, updateDoc, doc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

// TODO: Replace with your Firebase project configuration
// Get this from Firebase Console > Project Settings > Your apps > Web app
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const googleProvider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);
export const logOut = () => signOut(auth);

// Firestore helper functions
export const addVendor = async (vendorData) => {
  try {
    const docRef = await addDoc(collection(db, 'vendors'), {
      ...vendorData,
      createdAt: new Date(),
      verified: false
    });
    return docRef.id;
  } catch (error) {
    console.error('Error adding vendor:', error);
    throw error;
  }
};

export const getVendors = async (filters = {}) => {
  try {
    let q = collection(db, 'vendors');
    
    if (filters.service) {
      q = query(q, where('service', '==', filters.service));
    }
    if (filters.city) {
      q = query(q, where('city', '==', filters.city));
    }
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error('Error getting vendors:', error);
    throw error;
  }
};

export const addBooking = async (bookingData) => {
  try {
    const docRef = await addDoc(collection(db, 'bookings'), {
      ...bookingData,
      status: 'pending',
      createdAt: new Date()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error creating booking:', error);
    throw error;
  }
};

export const uploadImage = async (file, path) => {
  try {
    const storageRef = ref(storage, `${path}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);
    return downloadURL;
  } catch (error) {
    console.error('Error uploading image:', error);
    throw error;
  }
};

export default app;

// INSTRUCTIONS:
// 1. Go to https://console.firebase.google.com
// 2. Create a new project or select existing
// 3. Go to Project Settings (gear icon)
// 4. Scroll down to "Your apps" section
// 5. Click the "</>" (web) icon to create a web app
// 6. Copy the firebaseConfig object
// 7. Replace the values above with your actual config
// 8. Save this file
