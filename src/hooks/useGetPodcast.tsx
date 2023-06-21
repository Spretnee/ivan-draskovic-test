import {useQuery} from '@tanstack/react-query';
import {handleGetPodcast} from '../api/podcasts';

export const useGetPodcast = (query: string) =>
  useQuery([`pod${query}`], () => handleGetPodcast(query));
