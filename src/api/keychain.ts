import * as KeyChain from 'react-native-keychain';

export const storeAccessToken = async (accessToken: string) => {
  try {
    await KeyChain.setGenericPassword('accessToken', accessToken);
  } catch (error) {}
};

export const retrieveAccessToken = async () => {
  try {
    const credentials = await KeyChain.getGenericPassword();
    if (credentials) {
      const accessToken = credentials.password;
      return accessToken;
    } else {
    }
  } catch (error) {}
};

export const deleteToken = async () => {
  try {
    await KeyChain.resetGenericPassword();
  } catch (error) {}
};
