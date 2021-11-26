import { format, parse } from 'date-fns';
import { priceList } from '~/helpers/constants';

/**
 * 날짜 포맷
 * @param {string} date
 * @param {string | undefined} formatString
 * @param {string | undefined} formatString2
 * @returns {string} 포맷팅 된 날짜
 */
export const formatDate = (
  date: string,
  formatString = "yyyy-MM-dd'T'HH:mm:ss",
  formatString2 = 'PP',
) => {
  const parsed = parse(date, formatString, new Date());
  return format(parsed, formatString2);
};

/**
 * 당도 포맷
 * @param {number} sweet
 * @returns 당도문구
 */
export const formatSweet = (sweet: number) => {
  if (sweet <= 1) return '달지 않음';
  if (sweet <= 3) return '약간 달달함';
  else return '아주 달달함';
};

/**
 * 당도 포맷 alter
 * @param {number} sweet
 * @returns 당도문구
 */
export const formatSweetAlt = (sweet: number) => {
  if (sweet <= 1) return '달지 않고';
  if (sweet <= 3) return '약간 달달하고';
  else return '아주 달달하고';
};

export const formatAcidity = (acidity: number) => {
  if (acidity <= 2) return '산미가 적어서';
  if (acidity === 3) return '약간 산미가 있어서';
  return '산미가 강해서';
};

/**
 * 가격 포맷
 * @param {number} price
 * @returns 가격문구
 */
export const formatPrice = (price: number) => {
  if (price >= 10_000) {
    return `${String(price).slice(0, -4)}만원 대`;
  }
  return `${String(price).slice(0, -3)}천원 대`;
};

/**
 * 가격으로부터 index 반환
 * @param minPrice 최소가격
 * @param maxPrice 최대가격
 * @returns 해당하는 index
 */
export const priceToIndex = (minPrice?: number, maxPrice?: number) => {
  const minIndex = priceList.findIndex((price) => minPrice === price.minPrice);
  const maxIndex = priceList.findIndex((price) => maxPrice === price.maxPrice);
  if (
    (minPrice === undefined && maxPrice === undefined) ||
    minIndex === -1 ||
    maxIndex === -1
  ) {
    return {
      minIndex: -1,
      maxIndex: -1,
    };
  }
  return {
    minIndex,
    maxIndex,
  };
};

export const getByteLength = (str: string) =>
  new TextEncoder().encode(str).length;
