import { API_URL } from '~/api/urls';
import type {
  IPageable,
  IWineNote,
  IWineNoteDetail,
  WineNotesRequest,
} from '~/types';
import instance from './instance';

/**
 * GET 모든 와인노트 목록
 */
export const getWineNotes = async ({
  page,
  isTimeline,
  size,
}: WineNotesRequest) => {
  const { data } = await instance.get<IPageable<IWineNote>>(API_URL.WINE_NOTE, {
    params: {
      isTimeline,
      page,
      size,
    },
  });
  return data;
};

/**
 * GET 와인 노트 상세보기
 */
export const getWineNote = async (wineNoteId: number, isTimeline: boolean) => {
  const { data } = await instance.get<IWineNoteDetail>(
    `${API_URL.WINE_NOTE}/${wineNoteId}`,
    {
      params: {
        isTimeline,
      },
    },
  );
  return data;
};

/**
 * POST 와인 노트 등록
 */
export const postWineNote = async (data: any) => {
  await instance.post(API_URL.WINE_NOTE, data);
};

/**
 * POST 와인노트 좋아요
 */
export const toggleWineNoteLike = async (wineNoteId: number) => {
  await instance.post(API_URL.WINE_NOTE_LIKE, {
    wineNoteId,
  });
};

/**
 * PATCH 잘맞아요/안맞아요
 */
export const toggleWineNoteFitsMe = async (wineNoteId: number) => {
  await instance.patch(API_URL.WINE_NOTE_FITS_ME, {
    wineNoteId,
  });
};

/**
 * PATCH 와인노트 공개여부 변경
 */
export const toggleWineNotePublic = async (wineNoteId: number) => {
  await instance.patch(API_URL.WINE_NOTE_PUBLIC, {
    wineNoteId,
  });
};

/**
 * PATCH 와인노트 와인명 공개여부 변경 (관리자)
 */
export const patchWineNoteWineNamePublicAdmin = async (wineNoteId: number) => {
  await instance.patch(API_URL.WINE_NOTE_WINE_NAME_PUBLIC_ADMIN, {
    wineNoteId,
  });
};

/**
 * GET 이달의와인 목록
 */
export const getPopularWineNotes = async () => {
  const { data } = await instance.get<IWineNoteDetail[]>(
    API_URL.POPULAR_WINE_NOTE,
  );
  return data;
};

/**
 * GET 관련 와인 노트
 * @description wineType과 당도가 같고 음식명이 하나라도 중첩되는 노트
 */
export const getRelatedWineNotes = async (wineNoteId: number) => {
  const { data } = await instance.get<IWineNote[]>(API_URL.RELATED_WINE_NOTE, {
    params: {
      wineNoteId,
    },
  });
  return data;
};

/**
 * GET 와인명 조회
 */
export const getSearchWineName = async (searchName: string) => {
  const { data } = await instance.get(API_URL.SEARCH_WINE_NAME, {
    params: {
      searchName,
    },
  });
  return data;
};

/**
 * GET 와인명 조회 (관리자)
 */
export const getSearchWineNameAdmin = async () => {
  const { data } = await instance.get(API_URL.SEARCH_WINE_NAME_ADMIN);
  return data;
};

/**
 * GET 음식명 조회
 */
export const getSearchFoodName = async (keywords: string) => {
  const { data } = await instance.get(API_URL.SEARCH_FOOD_NAME, {
    params: {
      keywords,
    },
  });
  return data;
};
