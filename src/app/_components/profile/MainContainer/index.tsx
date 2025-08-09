import type React from 'react';
import { ProfileCard } from '../ProfileCard';
import { WorksCard } from '../WorksCard';

export const MainContainer: React.FC = () => {
	return (
		<>
			<ProfileCard />
			<WorksCard />
		</>
	);
};
