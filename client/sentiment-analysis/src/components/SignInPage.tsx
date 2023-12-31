import React from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithGoogle } from '../firebase/firebaseUtils';
import styles from '../styles/SignInPage.module.css'; 

const SignInPage: React.FC = () => {
    const navigate = useNavigate();
  
    const handleSignIn = async () => {
      try {
        await signInWithGoogle();
        navigate('/'); 
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