import { useQuery } from '@tanstack/react-query';
import { getRegionalPodcastMock } from '../api/podcasts';

export const useGetRegionalPodcastMock = () =>
  useQuery([`regional`], () => getRegionalPodcastMock());
