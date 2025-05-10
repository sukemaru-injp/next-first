import type { FC, ReactNode } from 'react';
import { cardLayoutStyle } from './style.css';

type Props = {
	title: ReactNode;
	children: ReactNode;
};

export const CardLayout: FC<Props> = ({ title, children }) => {
	return (
		<div className={cardLayoutStyle.wrapper}>
			<h2 className={cardLayoutStyle.head}>{title}</h2>
			{children}
		</div>
	);
};
