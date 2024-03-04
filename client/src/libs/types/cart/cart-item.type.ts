import { type Medicine } from '../types';

type CartItem = Medicine & { quantity: number };

export { type CartItem };
