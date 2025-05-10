import { type WorkDetail, works } from '@/utils/ui';
import { format } from 'date-fns';
import type React from 'react';
import { useMemo } from 'react';
import { CardLayout } from '../CardLayout';
import { workCardStyle } from './style.css';

type WorkProps = {
	detail: WorkDetail;
};
const Work: React.FC<WorkProps> = ({ detail }) => {
	const term = useMemo(() => {
		if (detail.endDate instanceof Date) {
			return `${format(detail.startDate, 'yyyy-MM-dd')} ~ ${format(detail.endDate, 'yyyy-MM-dd')}`;
		}
		return `${format(detail.startDate, 'yyyy-MM-dd')} ~ 現在`;
	}, [detail]);

	return (
		<div className={workCardStyle.workInner}>
			<div className={workCardStyle.titleWrapper}>
				<h3>{detail.name}</h3>
				<span className={workCardStyle.term}>({term})</span>
			</div>

			<div className={workCardStyle.detailArea}>
				{detail.description.map((v) => (
					<p key={`${v}`}>{v}</p>
				))}
				{detail.link && (
					<a href={detail.link} target="_blank" rel="noopener noreferrer">
						{detail.link}
					</a>
				)}
			</div>
		</div>
	);
};

export const WorksCard = () => {
	return (
		<CardLayout title="Career">
			<div className={workCardStyle.inner}>
				{works.map((detail) => {
					return <Work detail={detail} key={`${detail.name}`} />;
				})}
			</div>
		</CardLayout>
	);
};
