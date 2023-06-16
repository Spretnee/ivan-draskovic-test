import {useQuery} from '@tanstack/react-query';
import {getPodcast} from '../api/podcasts';

export const useGetPodcast = (query: string) =>
  useQuery([`${query}`, 'podcast'], async () => getPodcast(query));
