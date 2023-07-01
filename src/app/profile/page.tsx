import React from 'react';
import { getImages } from '@/features/request';
import { ProfileCard } from '../_components/ProfileCard';

const Home = async () => {
  const contents = await getImages();

  return (
    <>
      <h1>Home</h1>
      <ProfileCard imgDetail={contents.find((val) => val.label === 'top') ?? null} />
    </>
  );
};

export default Home;
