import { type MouseEvent, type ReactNode, forwardRef, useMemo } from 'react';
import { IconContext } from 'react-icons';

import { color, sizes } from '@/styles/foundation';
import { iconWrapper } from './style.css';

type SizeProps = 'small' | 'medium' | 'large' | 'xLarge';
const sizeObj = {
	small: sizes.S,
	medium: sizes.M,
	large: sizes.L,
	xLarge: '24px'
} as const;

interface IconProps {
	icon: ReactNode;
	size?: SizeProps;
	color?: string;
	noPointer?: boolean;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

export const Icon = forwardRef<HTMLButtonElement, IconProps>(
	({ size = 'medium', noPointer = false, icon, ...props }, ref) => {
		const iconSize = useMemo(() => sizeObj[size], [size]);

		return (
			<button
				className={iconWrapper}
				onClick={props?.onClick}
				ref={ref}
				style={{
					cursor: noPointer ? 'default' : 'pointer',
					border: 'none',
					backgroundColor: 'transparent'
				}}
				type="button"
			>
				<IconContext.Provider
					value={{ color: `${props?.color || color.subText}`, size: iconSize }}
				>
					{icon}
				</IconContext.Provider>
			</button>
		);
	}
);

Icon.displayName = 'Icon';
