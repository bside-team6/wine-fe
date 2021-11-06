import { format, parse } from 'date-fns';

/**
 * 날짜 포맷
 * @param {string} date
 * @param {string | undefined} formatString
 * @param {string | undefined} formatString2
 * @returns {string} 포맷팅 된 날짜
 */
export const formatDate = (
  date,
  formatString = "yyyy-MM-dd'T'HH:mm:ss",
  formatString2 = 'PP',
) => {
  console.log(date);
  const parsed = parse(date, formatString, new Date());
  return format(parsed, formatString2);
};

/**
 * 당도 포맷
 * @param {number} sweet
 * @returns {string} 당도문구
 */
export const formatSweet = (sweet) => {
  if (sweet <= 1) return '달지 않음';
  if (sweet <= 3) return '약간 달달함';
  else return '아주 달달함';
};
