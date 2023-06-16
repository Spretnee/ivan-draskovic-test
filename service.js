import TrackPlayer, {Event} from 'react-native-track-player';

module.exports = async function () {
  TrackPlayer.addEventListener('remote-play', () => TrackPlayer.play());
  TrackPlayer.addEventListener('remote-pause', () => TrackPlayer.pause());
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.reset());
  TrackPlayer.addEventListener(Event.RemoteSeek, () => TrackPlayer.seekBy());
  TrackPlayer.addEventListener(Event.RemoteStop, () => TrackPlayer.stop());
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );

  TrackPlayer.addEventListener(Event.RemoteJumpBackward, () =>
    TrackPlayer.RemoteJumpBackward(),
  );
  TrackPlayer.addEventListener(Event.RemoteJumpForward, () =>
    TrackPlayer.RemoteJumpForward(),
  );
};
