import { style } from '@vanilla-extract/css';

const inner = style({
	display: 'flex',
	flexDirection: 'column',
	gap: '4px'
});

const dateText = style({
	color: '#666',
	padding: '4px 0'
});

export { inner, dateText };
