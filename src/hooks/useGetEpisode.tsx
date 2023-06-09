import {useQuery} from '@tanstack/react-query';
import {getPodcastEpisode} from '../api/episodes';

export const useGetPodcastEpisode = (uuid: string) =>
  useQuery([`${uuid}`], () => getPodcastEpisode(uuid));
