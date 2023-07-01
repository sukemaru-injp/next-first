import { style } from '@vanilla-extract/css';
import { color } from '@/styles/foundation';

export const footerStyle = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.sub,
  color: color.text,
  height: '80px',
});
