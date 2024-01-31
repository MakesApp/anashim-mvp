import { Product } from '@/localTypes/product.types';
import { prodcuts } from '../data';

export default function () {
  const lastAdded = prodcuts.filter((product: Product) => product.tempVariable);
  lastAdded.sort((a, b) => Number(a.id) - Number(b.id));

  return lastAdded;
}

//TODO in the future this should be used for now its hardcode like above
// export default function getLastFourProducts() {
//   const sortedData = prodcuts.sort((a, b) => {
//     const timestampA = new Date(a.date).getTime();
//     const timestampB = new Date(b.date).getTime();

//     return timestampB - timestampA;
//   });
//   const lastFourProducts = sortedData.slice(0, 4);

//   return lastFourProducts;
// }
