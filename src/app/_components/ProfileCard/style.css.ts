import { style } from '@vanilla-extract/css';
import { color, sizes, borderRadius } from '@/styles/foundation';

const wrapper = style({
  backgroundColor: `${color.text}`,
  borderRadius: '5px',
  padding: `${sizes.M}`,
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XS}`,
  width: '70vw',
  margin: '0 auto',

  '@media': {
    'screen and (max-width: 768px)': {
      width: '90vw',
    },
  },
});

const head = style({
  color: `${color.main}`,
});

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
  wrapper,
  head,
  imgWrapper,
  img,
  inner,
  li,
} as const;
