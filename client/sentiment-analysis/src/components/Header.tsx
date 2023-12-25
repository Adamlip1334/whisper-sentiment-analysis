import React from 'react';
import styles from '../styles/Header.module.css'; 

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        Adam Lipson
      </div>
      {/* Add navigation, search, or other header content here */}
    </header>
  );
};

export default Header;
