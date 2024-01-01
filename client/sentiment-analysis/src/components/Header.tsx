import React, { useState, useEffect } from 'react';
import styles from '../styles/Header.module.css'; 
import { auth } from '../firebase/firebase';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: User | null) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    auth.signOut(); // Firebase sign out
    try {
      await auth.signOut(); // Firebase sign out
      navigate('/'); 
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };


  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Adam Lipson
      </div>
      {user && (
        <div className={styles.profile}>
          <img src={user.photoURL || ''} alt="User Profile" className={styles.profilePic} />
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </header>
  );
};

export default Header;