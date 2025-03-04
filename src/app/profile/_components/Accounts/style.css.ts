import { style } from '@vanilla-extract/css';
import { sizes, color } from '@/styles/foundation';

const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  gap: `${sizes.XXS}`,
});

const text = style({
  color: `${color.subText}`,
  fontWeight: 'bold',
});

const iconWrapper = style({
  display: 'flex',
  gap: `${sizes.M}`,
  alignItems: 'center',
  padding: `0 ${sizes.XS}`,
});

export const accountStyle = {
  wrapper,
  text,
  iconWrapper,
} as const;
