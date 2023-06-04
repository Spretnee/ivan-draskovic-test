import {View, Text} from 'react-native';
import React from 'react';
import {GetUserProps} from '../types';
import {useQuery} from '@tanstack/react-query';
import {getUser} from '../getUser';

export const useGetUser = (credentials: GetUserProps) =>
  useQuery(['user'], async () => getUser(credentials));
