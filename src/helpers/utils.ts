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
 * @returns {string} 당도문구
 */
export const formatSweet = (sweet: number) => {
  if (sweet <= 1) return '달지 않음';
  if (sweet <= 3) return '약간 달달함';
  else return '아주 달달함';
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

export const getSearchParam = <T extends string>(name: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  return (searchParams.get(name) as T) || undefined;
};

export const getSearchParams = <T extends string[]>(name: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  const values = searchParams.getAll(name) as T;
  return values.length > 0 ? values : undefined;
};

export const toNumber = (str: string | undefined) => Number(str) || undefined;
