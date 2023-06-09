import * as KeyChain from 'react-native-keychain';

export const storeAccessToken = async (accessToken: string | undefined) => {
  try {
    if (accessToken) {
      return await KeyChain.setGenericPassword('accessToken', accessToken);
    }
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

export const checkTokenValidity = async (accessToken: string | undefined) => {
  try {
    const storedToken = await retrieveAccessToken();
    if (storedToken === accessToken) {
      console.log('isti');
      return true;
    } else {
      return false;
    }
  } catch (error) {}
};
