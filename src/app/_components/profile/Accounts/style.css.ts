import { style } from '@vanilla-extract/css';
import { sizes } from '@/styles/foundation';

const iconWrapper = style({
  display: 'flex',
  gap: `${sizes.M}`,
  alignItems: 'center',
  padding: `0 ${sizes.XS}`,
});

export const accountStyle = {
  iconWrapper,
} as const;
