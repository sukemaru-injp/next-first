import React from 'react';
import { getYear } from 'date-fns';
import { footerStyle } from './style.css';

export const Footer = () => {
  return (
    <footer className={footerStyle}>
      <p>&copy; {getYear(new Date())} - sukemaru</p>
    </footer>
  );
};
