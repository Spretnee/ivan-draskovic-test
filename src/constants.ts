import {Track} from 'react-native-track-player';

export const PLAYLIST_DATA: Track[] = [
  {
    url: 'https://dcs.megaphone.fm/FOXM1120608648.mp3?key=119300662c3e7771a698a2791d241a44&request_event_id=7bac94dc-dd65-4022-bb1b-522083f3d538', // Load media from the network
    title: 'Avaritia',
    artist: 'deadmau5',
    album: 'while(1<2)',
    genre: 'Progressive House, Electro House',
    date: '2014-05-20T07:00:00+00:00', // RFC 3339
    artwork: 'http://example.com/cover.png', // Load artwork from the network
    duration: 402, // Duration in seconds
  },
];
