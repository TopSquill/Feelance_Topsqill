import { getItem, KEY_ACCESS_TOKEN } from "./localStorageManeger";

export const requireUser = () => {
  return getItem(KEY_ACCESS_TOKEN);
};
