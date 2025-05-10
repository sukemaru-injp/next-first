import { getBlogs } from './_api/getBlogs';
import { getImages } from './_api/getImages';
import { MainContainer } from './_components/profile/MainContainer';

const Home = async () => {
	const [images, blogs] = await Promise.all([getImages(), getBlogs()]);

	return (
		<>
			<MainContainer contents={images} blogs={blogs} />
		</>
	);
};

export default Home;
