import {View, Text} from 'react-native';
import React from 'react';
import {AuthUserProps} from '../api/types';
import {useQuery} from '@tanstack/react-query';
import {authUser} from '../api/episodes';

export const useAuthUser = (credentials: AuthUserProps) =>
  useQuery(['user'], async () => authUser(credentials));
