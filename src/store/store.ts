import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import playerReducer from './playerSlice';

const middleware = getDefaultMiddleware({
  // https://github.com/reduxjs/redux-toolkit/issues/415
  immutableCheck: false,
});

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middleware.push(createDebugger());
}

export const store = configureStore({
  reducer: {
    player: playerReducer,
  },
  middleware,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
