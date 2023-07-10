import TrackPlayer, {
  Event,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import {
  setCurrentTrack,
  setCurrentTrackIndex,
  setMultiTrackProgress,
} from '../store/playerSlice';
import { useAppDispatch } from '../store/hooks';

export const usePlayerEvents = () => {
  const dispatch = useAppDispatch();
  useTrackPlayerEvents(
    [Event.PlaybackTrackChanged, Event.PlaybackProgressUpdated],
    async event => {
      if (
        event.type === Event.PlaybackTrackChanged &&
        event.nextTrack != null
      ) {
        const track = await TrackPlayer.getTrack(event.nextTrack);
        const index = await TrackPlayer.getCurrentTrack();

        if (track) {
          dispatch(setCurrentTrack(track));
        }

        dispatch(setCurrentTrackIndex(index));
      }

      if (event.track != null && event.type === Event.PlaybackProgressUpdated) {
        const track = await TrackPlayer.getTrack(event.track);
        dispatch(
          setMultiTrackProgress({ id: track?.id, position: event.position }),
        );
      }
    },
  );
  return {};
};
