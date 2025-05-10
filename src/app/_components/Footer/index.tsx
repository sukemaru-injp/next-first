import { getYear } from 'date-fns';
import { Accounts } from '../profile/Accounts';
import { footerStyle } from './style.css';

export const Footer = () => {
	return (
		<footer className={footerStyle}>
			<Accounts />
			<p>&copy; {getYear(new Date())} - sukemaru</p>
		</footer>
	);
};
