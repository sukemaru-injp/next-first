import { cardLayoutStyle } from './style.css';
import type { FC, ReactNode } from 'react';

type Props = {
  title: ReactNode;
  children: ReactNode;
};

export const CardLayout: FC<Props> = ({ title, children }) => {
  return (
    <div className={cardLayoutStyle.wrapper}>
      <h2 className={cardLayoutStyle.head}>{title}</h2>
      {children}
    </div>
  );
};
