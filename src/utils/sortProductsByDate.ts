export default function sortProductsByDate(products: any) {
  const sortedData = products.sort((a: any, b: any) => {
    const timestampA = new Date(a.date).getTime();
    const timestampB = new Date(b.date).getTime();

    return timestampB - timestampA;
  });

  return sortedData;
}
