import { prodcuts } from '@/data';

export default function (productId?: string) {
  return prodcuts.find((product) => product.id === productId);
}
