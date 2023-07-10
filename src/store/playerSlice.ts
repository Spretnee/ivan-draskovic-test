import { PayloadAction, createSelector, createSlice } from '@reduxjs/toolkit';
import { TrackWithId } from '../types';
import { MultiTrackProgress } from '../providers/types';
import { PodcastMetadata } from '../api/types';
import { useState } from 'react';

const initialState: PlayerSliceState = {
  currentTrack: { id: '', url: '' },
  multiTrackProgress: {},
  currentTrackIndex: null,
  podcastMetadata: undefined,
};

type PlayerSliceState = {
  currentTrack: TrackWithId;
  multiTrackProgress: MultiTrackProgress;
  currentTrackIndex: number | null;
  podcastMetadata: PodcastMetadata | undefined;
};

type MultiTrackProgressPayload = { id: string; position: number };

const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    setPodcastMetadata: (state, action: PayloadAction<PodcastMetadata>) => {
      state.podcastMetadata = action.payload;
    },

    setCurrentTrackIndex: (state, action: PayloadAction<number>) => {
      state.currentTrackIndex = action.payload;
    },
    setCurrentTrack: (state, action: PayloadAction<TrackWithId>) => {
      state.currentTrack = action.payload;
    },
    setMultiTrackProgress: (
      state,
      action: PayloadAction<MultiTrackProgressPayload>,
    ) => {
      state = {
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

export const { setCurrentTrack, setMultiTrackProgress, setCurrentTrackIndex } =
  playerSlice.actions;

export default playerSlice.reducer;
