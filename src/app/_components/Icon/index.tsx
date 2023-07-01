import { ReactNode, MouseEvent, useMemo, forwardRef } from 'react';
import { IconContext } from 'react-icons';

import { iconWrapper } from './style.css';
import { sizes, color } from '@/styles/foundation'

type SizeProps = 'small' | 'medium' | 'large' | 'xLarge';
const sizeObj = {
  small: sizes.S,
  medium: sizes.M,
  large: sizes.L,
  xLarge: '24px',
} as const;

interface IconProps {
  icon: ReactNode;
  size?: SizeProps;
  color?: string;
  noPointer?: boolean;
  // eslint-disable-next-line no-unused-vars
  onClick?: (event: MouseEvent<HTMLDivElement>) => void;
}

export const Icon = forwardRef<HTMLDivElement, IconProps>(
  ({ size = 'medium', noPointer = false, icon, ...props }, ref) => {
    const iconSize = useMemo(() => sizeObj[size], [size]);

    return (
      <div
        className={iconWrapper}
        onClick={props?.onClick}
        ref={ref}
        style={{ cursor: noPointer ? 'default' : 'pointer' }}
      >
        <IconContext.Provider value={{ color: `${props?.color || color.subText}`, size: iconSize }}>
          {icon}
        </IconContext.Provider>
      </div>
    );
  },
);

Icon.displayName = 'Icon';
