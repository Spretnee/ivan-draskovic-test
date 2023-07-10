import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { TrackWithId } from '../types';
import { MultiTrackProgress } from '../providers/types';
import { PodcastMetadata } from '../api/types';
import { useState } from 'react';
import { Track } from 'react-native-track-player';

const initialState: PlayerSliceState = {
  currentTrack: { id: '', url: '' },
  multiTrackProgress: {},
  currentTrackIndex: null,
  podcastMetadata: undefined,
  queue: [],
};

export type PlayerSliceState = {
  currentTrack: Track;
  multiTrackProgress: MultiTrackProgress;
  currentTrackIndex: number | null;
  podcastMetadata: PodcastMetadata | undefined;
  queue: Track[];
};

type MultiTrackProgressPayload = { id: string; position: number };

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setQueue: (state, action: PayloadAction<Track[]>) => {
      state.queue = action.payload;
    },
    setPodcastMetadata: (state, action: PayloadAction<PodcastMetadata>) => {
      state.podcastMetadata = action.payload;
    },

    setCurrentTrackIndex: (state, action: PayloadAction<number | null>) => {
      state.currentTrackIndex = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<Track>) => {
      state.currentTrack = action.payload;
    },
    setMultiTrackProgress: (
      state,
      action: PayloadAction<MultiTrackProgressPayload>,
    ) => {
      return {
        ...state,
        multiTrackProgress: {
          ...state.multiTrackProgress,
          [action.payload.id]: action.payload.position,
        },
      };
    },
  },
});

//selectors

export const selectTrackProgress = (trackId: string) =>
  createSelector(
    (state: PlayerSliceState) => state.multiTrackProgress,
    multiTrackProgress => multiTrackProgress[trackId] || 0,
  );

export const {
  setCurrentTrack,
  setMultiTrackProgress,
  setCurrentTrackIndex,
  setPodcastMetadata,
  setQueue,
} = playerSlice.actions;

export default playerSlice.reducer;
