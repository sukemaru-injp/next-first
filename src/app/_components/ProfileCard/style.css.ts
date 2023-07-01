import { style } from '@vanilla-extract/css';
import { color, sizes, borderRadius } from '@/styles/foundation';

const wrapper = style({
  backgroundColor: `${color.text}`,
  borderRadius: '5px',
  padding: `${sizes.M}`,
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XS}`,
});

const head = style({
  color: `${color.main}`,
});

const imgWrapper = style({
  maxHeight: '100%',
  maxWidth: '100%',
});

const img = style({
  objectFit: 'cover',
  borderRadius: `${borderRadius.default}`,
});

export const profileCardStyle = {
  wrapper,
  head,
  imgWrapper,
  img,
} as const;
