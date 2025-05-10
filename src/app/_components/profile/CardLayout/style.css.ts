import { color, sizes } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

const head = style({
	color: `${color.main}`
});

const wrapper = style({
	borderRadius: '5px',
	padding: `${sizes.M}`,
	display: 'flex',
	flexDirection: 'column',
	gap: `${sizes.XS}`,
	width: '70vw',
	margin: '0 auto',

	'@media': {
		'screen and (max-width: 768px)': {
			width: '90vw'
		}
	}
});

export const cardLayoutStyle = {
	head,
	wrapper
} as const;
