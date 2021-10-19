import { format, parse } from 'date-fns';

export const formatDate = (
  date,
  formatString = 'yyyy-MM-dd',
  formatString2 = 'PP',
) => {
  const parsed = parse(date, formatString, new Date());
  return format(parsed, formatString2);
};
