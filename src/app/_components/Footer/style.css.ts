import { color, sizes } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

export const footerStyle = style({
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: color.sub,
	color: color.subText,
	padding: `${sizes.M} 0px`
});
