import React from 'react';
import { getYear } from 'date-fns';
import { footerStyle } from './style.css';
import { Accounts } from '../profile/Accounts';

export const Footer = () => {
  return (
    <footer className={footerStyle}>
      <Accounts />
      <p>&copy; {getYear(new Date())} - sukemaru</p>
    </footer>
  );
};
