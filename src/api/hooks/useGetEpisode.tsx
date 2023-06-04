import {useQuery} from '@tanstack/react-query';
import {getEpisode} from '../getEpisode';

export const useGetEpisode = (id: string) =>
  useQuery(['episode'], () =>
    id ? getEpisode(id) : Promise.resolve(undefined),
  );
