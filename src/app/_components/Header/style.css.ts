import { style } from '@vanilla-extract/css';
import { color } from '@/styles/constants';

export const headerStyle = style({
  display: 'flex',
  alignItems: 'center',
  padding: '0 4px',
  backgroundColor: color.main,
  color: color.text,
  height: '60px',
});
