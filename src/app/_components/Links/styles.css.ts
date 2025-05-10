import { color, sizes } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

export const wrapper = style({
	display: 'grid',
	placeContent: 'center',
	gap: sizes.XXS,
	padding: sizes.XS
});

export const wrapper2 = style({
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	gap: sizes.XXS
});

export const link = style({
	color: color.subText,
	textDecoration: 'none'
});

export const span = style({
	color: color.subText
});
