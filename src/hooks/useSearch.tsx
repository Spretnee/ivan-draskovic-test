import {QueryObserver, useQuery} from '@tanstack/react-query';
import {getEpisode} from '../api/episodes';
import {search} from '../api/podcasts';

export const useSearch = (query: string) =>
  useQuery([`search${query}`], () => search(query));
