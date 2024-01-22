import { iconsByName } from './constants';

export default (names: (keyof typeof iconsByName)[]) => {
  return names.map((name) => iconsByName[name]);
};
