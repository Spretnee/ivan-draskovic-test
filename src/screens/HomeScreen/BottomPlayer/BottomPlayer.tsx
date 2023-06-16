// import {View} from 'react-native';
// import {styles} from './BottomPlayer.styles';
// import {SliderMinimized} from '../SliderMinimized';
// import {useContext} from 'react';
// import {PlayerCon} from '../../../providers/PlayerProvider';
// import {BottomPlayerControls} from './BottomPlayerControls/BottomPlayerControls';
// import {useControls} from '../../../hooks/useControls';

// export const BottomPlayer = () => {
//   // const {
//   //   isPlaying,
//   //   isPaused,
//   //   isConnecting,
//   //   isBuffering,
//   //   progressBarDuration,
//   //   progressBarPosition,
//   // } = useContext(PlayerCon);

//   const {play, pause, reset} = useControls(progressBarPosition);

//   // if (isPlaying || isPaused || isBuffering || isConnecting) {
//     return (
//       <>
//         <View style={styles.container}>
//           {/* <BottomPlayerTitle data={data} /> */}
//           {/* <BottomPlayerControls
//             play={play}
//             pause={pause}
//             reset={reset}
//             isPlaying={isPlaying}
//           /> */}
//         </View>
//         {/* <SliderMinimized
//           position={progressBarPosition}
//           duration={progressBarDuration}
//         /> */}
//       </>
//     );
//   } else {
//     return <View></View>;
//   }
// };
