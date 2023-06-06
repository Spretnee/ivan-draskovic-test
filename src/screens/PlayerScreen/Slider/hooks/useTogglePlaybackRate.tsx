import {useState} from 'react';
import {INITIAL_INDEX_VALUE} from '../constats';
import TrackPlayer from 'react-native-track-player';

export const useTogglePlaybackRate = () => {
  const [activeIndex, setActiveIndex] = useState(INITIAL_INDEX_VALUE);

  const togglePlaybackSpeed = (index: number, array: number[]) => {
    setActiveIndex(prevIndex => {
      if (prevIndex + 1 === array.length) {
        TrackPlayer.setRate(array[INITIAL_INDEX_VALUE]);
        return INITIAL_INDEX_VALUE;
      } else {
        TrackPlayer.setRate(array[index]);
        return index;
      }
    });
  };

  return {togglePlaybackSpeed, activeIndex};
};
