import React from 'react';
import { getImages } from './_api/getImages';
import { MainContainer } from './_components/profile/MainContainer';

const Home = async () => {
  const contents = await getImages();
  return (
    <>
      <MainContainer contents={contents} />
    </>
  );
};

export default Home;
