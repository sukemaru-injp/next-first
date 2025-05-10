import { sizes } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

const iconWrapper = style({
	display: 'flex',
	gap: `${sizes.M}`,
	alignItems: 'center',
	padding: `0 ${sizes.XS}`
});

export const accountStyle = {
	iconWrapper
} as const;
