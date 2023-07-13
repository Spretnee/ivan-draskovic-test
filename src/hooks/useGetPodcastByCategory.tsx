import { useQuery } from '@tanstack/react-query';
import { PodcastCategories } from '../constants/podchaserApi';
import { getPodcastsByCategory } from '../api/categories';

export const useGetPodcastByCategory = (query: PodcastCategories) =>
  useQuery([`category ${query}`], () => getPodcastsByCategory(query));
