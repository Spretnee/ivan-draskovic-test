import { useQuery } from '@tanstack/react-query';
import { getPopularPodcastMock } from '../api/podcasts';

export const useGetPopularPodcastMock = () =>
  useQuery([`trending`], () => getPopularPodcastMock());
