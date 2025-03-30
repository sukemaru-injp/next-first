import { style } from '@vanilla-extract/css';
import { color, borderRadius } from '@/styles/foundation';

const imgWrapper = style({
  maxHeight: '100%',
  maxWidth: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const img = style({
  objectFit: 'cover',
  borderRadius: `${borderRadius.default}`,
});

const inner = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: `${color.subText}`,
});

const li = style({
  listStyleType: 'circle',
  lineHeight: '1.4rem',
});

export const profileCardStyle = {
  imgWrapper,
  img,
  inner,
  li,
} as const;
