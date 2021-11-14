export const isProduction = process.env.NODE_ENV === 'production';

export const BASE_URL = isProduction
  ? 'http://ec2-54-180-133-23.ap-northeast-2.compute.amazonaws.com'
  : 'http://localhost:3000';
