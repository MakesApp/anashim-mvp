import { prodcuts } from '../data';

export default function getLastFourProducts() {
  const sortedData = prodcuts.sort((a, b) => {
    const timestampA = new Date(a.date).getTime();
    const timestampB = new Date(b.date).getTime();

    return timestampB - timestampA;
  });
  const lastFourProducts = sortedData.slice(0, 4);

  return lastFourProducts;
}
