'use client';

import Link from 'next/link';
import type { JSX } from 'react';
import { link, span, wrapper, wrapper2 } from './styles.css';

export const Links = (): JSX.Element => {
	return (
		<div className={wrapper}>
			<div className={wrapper2}>
				<Link href="/" className={link}>
					Article
				</Link>
				<span className={span}>/</span>
				<Link href="/blogs" className={link}>
					Blogs
				</Link>
			</div>
		</div>
	);
};
