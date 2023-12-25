import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/HomePage.module.css'; 

const HomePage: React.FC = () => {
  return (
    <div className={styles.homepage}>
      <section className={styles.hero}>
        <h1>Welcome to Our Video Transcription Service</h1>
        <p>Upload your video files and get transcriptions easily and quickly.</p>
        <Link to="/transcribe" className={styles.transcribeButton}>Start Transcribing</Link>
      </section>
      {/* You can add more sections here as needed */}
    </div>
  );
};

export default HomePage;
