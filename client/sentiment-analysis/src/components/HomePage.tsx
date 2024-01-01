import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css'; 
import { signInWithGoogle } from '../firebase/firebaseUtils';
import { auth } from '../firebase/firebase';
import { User } from 'firebase/auth';

const HomePage: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <h1>Welcome to Our Video Transcription Service</h1>
        <p>Upload your video files and get transcriptions easily and quickly.</p>
        { user && (
        <Link to="/transcribe" className={styles.transcribeButton}>Start Transcribing</Link>
        )}
      </section>
      { !user && (
      <section className={styles.signIn}>
        <h2>Sign In to Access</h2>
        <button onClick={signInWithGoogle} className={styles.signInButton}>Sign In With Google</button>
      </section>
      )}
    </div>
  );
};

export default HomePage;
