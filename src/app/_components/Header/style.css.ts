import { color } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

export const headerStyle = style({
	display: 'flex',
	alignItems: 'center',
	padding: '0 4px',
	backgroundColor: color.main,
	color: color.sub,
	height: '60px'
});
