import React from 'react';
import { getProfile } from '@/features/request';
import { ProfileCard } from '../_components/ProfileCard';

const Home = async () => {
  const res = await getProfile();
  console.log(res);
  return (
    <>
      <h1>Home</h1>
      <ProfileCard />
    </>
  );
};
export default Home;
