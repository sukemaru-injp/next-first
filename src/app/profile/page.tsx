import React from 'react';
import { getImages } from '@/features/request';
import { MainContainer } from '../_components/MainContainer';

const Home = async () => {
  const contents = await getImages();

  return (
    <>
      <MainContainer contents={contents} />
    </>
  );
};

export default Home;
