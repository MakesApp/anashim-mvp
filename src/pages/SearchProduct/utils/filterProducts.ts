import { Product } from '@/localTypes/product.types';
import { Type, Field, Sector } from '@utils/enum';
const matchesEnumValue = (
  searchQuery: string,
  enumObject: { [s: string]: string },
): boolean => {
  const enumValues = Object.values(enumObject);
  return enumValues.includes(searchQuery);
};

const filterProducts = (products: Product[], filters: any, searchQuery: string) => {
  const sortedProducts = products.sort((a: any, b: any) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateB.getTime() - dateA.getTime();
  });
  return sortedProducts.filter((product: any) => {
    for (const [filterType, filterValues] of Object.entries(filters) as any) {
      if (filterType === 'type' && !filterValues.includes(product.type)) {
        return false;
      }
      if (
        filterType === 'sector' &&
        !product.sector.some((sector: any) => filterValues.includes(sector))
      ) {
        return false;
      }
      if (
        filterType === 'fields' &&
        !product.fields.some((field: any) => filterValues.includes(field))
      ) {
        return false;
      }
    }
    if (searchQuery?.length) {
      const nameMatches = product.name.toLowerCase().startsWith(searchQuery);
      const descriptionMatches = product.shortDescription
        .toLowerCase()
        .includes(searchQuery);

      const typeMatches = matchesEnumValue(searchQuery, Type);
      const fieldMatches = matchesEnumValue(searchQuery, Field);
      const sectorMatches = matchesEnumValue(searchQuery, Sector);

      if (typeMatches || fieldMatches || sectorMatches) {
      }
      return (
        nameMatches || descriptionMatches || typeMatches || fieldMatches || sectorMatches
      );
    }
    return true;
  });
};
export default filterProducts;
