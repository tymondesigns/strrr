import { Str } from './Str';

export * from './Str';
export const str = (s) => new Str(s);
export const random = (length = 32) => str(length).random();
