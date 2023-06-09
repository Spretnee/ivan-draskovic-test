import {useQuery} from '@tanstack/react-query';
import {getPodcast} from '../api/podcasts';

export const useGetPodcast = (name: string) =>
  useQuery([`'${name}'`], async () => getPodcast(name));
