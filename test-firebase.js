// Simple Firebase connectivity test
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBEZIUHcGSRT1dpNh-Oc0s-BqUvHxnA2F8",
  authDomain: "bus-buddy-navigator.firebaseapp.com",
  projectId: "bus-buddy-navigator",
  storageBucket: "bus-buddy-navigator.firebasestorage.app",
  messagingSenderId: "270698436018",
  appId: "1:270698436018:web:f0867393c9cb0b0be180ab",
  measurementId: "G-SBBPVLHBLK"
};

async function testFirebase() {
  try {
    console.log('🔥 Initializing Firebase...');
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    console.log('📝 Testing database write...');
    const docRef = await addDoc(collection(db, 'test'), {
      message: 'Hello from Bus Buddy!',
      timestamp: new Date()
    });
    
    console.log('✅ Firebase connection successful! Document written with ID:', docRef.id);
  } catch (error) {
    console.error('❌ Firebase connection failed:', error);
  }
}

testFirebase();
