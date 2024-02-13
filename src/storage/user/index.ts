import * as SecureStore from 'expo-secure-store';

enum SecureStoreUser {
  user = 'lighthouseitUser',
}

interface SecureStoreUserData {
  email: string;
}

const getUser = async (): Promise<boolean> => {
  return !!(await SecureStore.getItemAsync(SecureStoreUser.user));
};

const setUser = async ({ email }: SecureStoreUserData) => {
  await SecureStore.setItemAsync(SecureStoreUser.user, email);
};

const clearStorage = async () => {
  SecureStore.deleteItemAsync(SecureStoreUser.user);
};

export { getUser, setUser, clearStorage };
