import { style } from '@vanilla-extract/css';
import { color } from '@/styles/foundation';

export const footerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.sub,
  color: color.subText,
  height: '80px',
});
