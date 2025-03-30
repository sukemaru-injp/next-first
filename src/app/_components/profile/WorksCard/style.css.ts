import { style } from '@vanilla-extract/css';
import { color, sizes } from '@/styles/foundation';

const inner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XS}`,
});

const titleWrapper = style({
  display: 'flex',
  alignItems: 'center',
  gap: sizes.XS,
});
const workInner = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XXS}`,
});

const term = style({
  color: `${color.subText}`,
});

const detailArea = style({
  display: 'flex',
  flexDirection: 'column',
  color: `${color.subText}`,
});

export const workCardStyle = {
  inner,
  workInner,
  term,
  detailArea,
  titleWrapper,
} as const;
