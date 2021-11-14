export const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction
  ? 'http://www.wineasy.kr'
  : 'http://localhost:3000';
