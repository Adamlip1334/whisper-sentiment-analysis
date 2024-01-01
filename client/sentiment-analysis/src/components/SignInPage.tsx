import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase'; // Adjust this path to your Firebase config file
import { signInWithGoogle } from '../firebase/firebaseUtils'; // Adjust this path to your sign-in utility
import styles from '../styles/SignInPage.module.css'; // Adjust this path to your CSS module

const SignInPage: React.FC = () => {
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        await signInWithGoogle();
        navigate('/'); // Redirect to homepage after successful sign-in
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    };
  
    return (
      <div className={styles.signInPage}>
        <h1>Sign In</h1>
        <p>Welcome to our service. Please sign in to continue.</p>
        <button onClick={handleSignIn} className={styles.signInButton}>
          Sign In With Google
        </button>
      </div>
    );
  };
  
  export default SignInPage;