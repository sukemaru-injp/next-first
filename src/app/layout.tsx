import '../styles/globals.css';
import { color } from '@/styles/foundation';
import type { Metadata } from 'next';
import { type FC, type ReactNode, Suspense } from 'react';
import { Footer } from './_components/Footer';
import { Header } from './_components/Header';
import { Links } from './_components/Links';

interface Props {
	children: ReactNode;
}

export const metadata: Metadata = {
	title: 'sukemaru | articles',
	description: 'sukemaru.net | By sukemaru',
	icons: {
		icon: '/favicon.ico'
	}
};

const RootLayout: FC<Props> = ({ children }) => {
	return (
		<>
			<body>
				<Header />
				<Suspense fallback={<p>Loading...</p>}>
					<main
						style={{ minHeight: '100vh', backgroundColor: color.defaultBg }}
					>
						<Links />
						{children}
					</main>
				</Suspense>
				<Footer />
			</body>
		</>
	);
};

export default RootLayout;
