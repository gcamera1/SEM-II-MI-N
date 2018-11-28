import { removeStorage, getStorage } from '../common/storage';

export const getUserLogged = () => JSON.parse(getStorage('session'));
export const logout = () => removeStorage('session');