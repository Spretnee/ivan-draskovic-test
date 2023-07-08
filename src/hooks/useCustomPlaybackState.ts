import { View, Text } from 'react-native';
import React from 'react';
import { State, usePlaybackState } from 'react-native-track-player';
import { PlayerState } from './types';

export const useCustomPlaybackState = (): PlayerState => {
  const state = usePlaybackState();

  const isPlaying = state === State.Playing;
  const isPaused = state === State.Paused;
  const isReady = state === State.Ready;
  const isIdle = state === State.None;
  const isBuffering = state === State.Buffering;
  const isConnecting = state === State.Connecting;
  const isLoading = isBuffering || isConnecting;

  return {
    isBuffering,
    isPlaying,
    isConnecting,
    isPaused,
    isReady,
    isIdle,
    isLoading,
  };
};
