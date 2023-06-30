import React from 'react';
import { getProfile } from '@/features/request';

const Home = async () => {
  const res = await getProfile();
  console.log(res);
  return <h1>Home</h1>;
};
export default Home;
