import { color, sizes } from '@/styles/foundation';
import { style } from '@vanilla-extract/css';

const wrapper = style({
	display: 'flex',
	flexDirection: 'column',
	gap: sizes.XXS,
	padding: '0'
});

const list = style({
	listStyle: 'none'
});

const dateText = style({
	color: color.subText
});

const anchor = style({
	textDecoration: 'none'
});

export const blogsCardStyle = {
	wrapper,
	list,
	dateText,
	anchor
};
