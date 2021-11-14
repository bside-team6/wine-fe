export const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction
  ? 'https://www.wineasy.kr'
  : 'http://localhost:3000';
