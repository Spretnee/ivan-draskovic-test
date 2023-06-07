import {useQuery} from '@tanstack/react-query';
import {getEpisode} from '../api/episodes';

export const useGetEpisode = (id: string) =>
  useQuery([`${id}`], () => getEpisode(id));
