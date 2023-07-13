import { useQuery } from '@tanstack/react-query';
import { getImage } from '../api/image';

export const useGetImage = (url: string | number | undefined) =>
  useQuery([`image ${url}`], () =>
    url && typeof url !== 'number' ? getImage(url) : '',
  );
