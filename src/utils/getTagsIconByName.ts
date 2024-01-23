import { tagsObj } from './constants';

export default (names: (keyof typeof tagsObj)[]) => {
  return names.map((name) => ({ ...tagsObj[name], text: name }));
};
