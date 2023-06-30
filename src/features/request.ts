import { client } from '@/libs/client';

type ImageDetail = {
  label: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

export const getProfile = async () => {
  const { contents } = await client.getList<ImageDetail>({ endpoint: 'profile' });
  return contents;
};
