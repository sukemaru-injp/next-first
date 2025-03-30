import { style } from '@vanilla-extract/css';
import { color, sizes } from '@/styles/foundation';

export const footerStyle = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.sub,
  color: color.subText,
  padding: `${sizes.M} 0px`,
});
