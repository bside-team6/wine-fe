export const API_URL = {
  LOGIN: '/api/v1/sign-in/kakao',
  SIGNUP: '/api/v1/sign-up/kakao',
  VALIDATE_NICKNAME: '/api/v1/sign-up/nick-name-validate',
  USER_INFO: '/api/v1/user-info',
  REFRESH_ACCESS_TOKEN: '/api/v1/renew-accessToken',
  WINE_NOTE: '/api/v1/wine-note',
  WINE_NOTE_LIKE: '/api/v1/wine-note-like',
  WINE_NOTE_FITS_ME: '/api/v1/wine-note-fits-me',
  WINE_NOTE_PUBLIC: '/api/v1/wine-note-public',
  WINE_NOTE_WINE_NAME_PUBLIC_ADMIN:
    '/api/v1/manager/wine-note-wine-name-public',
  WINE_NOTE_TIMELINE: '/api/v1/wine-note-timeline',
  POPULAR_WINE_NOTE: '/api/v1/wine-note-popular',
  RELATED_WINE_NOTE: '/api/v1/wine-note/related',
  SEARCH_WINE_NAME: '/api/v1/wine-name-search',
  SEARCH_WINE_NAME_ADMIN: '/api/v1/manager/wine-name',
  SEARCH_FOOD_NAME: '/api/v1/wine-note-food',
} as const;
