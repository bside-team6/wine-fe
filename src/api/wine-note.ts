import { API_URL } from '~/api/urls';
import type {
  IFoodSearch,
  IPageable,
  IWineNote,
  IWineNoteDetail,
  IWineSearch,
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
  wineId,
}: WineNotesRequest) => {
  const { data } = await instance.get<IPageable<IWineNote>>(API_URL.WINE_NOTE, {
    params: {
      isTimeline,
      page,
      size,
      wineId,
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
 * GET 와인명으로 와인 검색
 * @description 자동완성을 위한 와인명으로 와인 검색
 */
export const getSearchWine = async (searchName: string) => {
  const { data } = await instance.get<IWineSearch[]>(API_URL.SEARCH_WINE, {
    params: {
      searchName,
    },
  });
  return data;
};

/**
 * GET 와인명으로 와인 검색 (관리자)
 */
export const getSearchWineAdmin = async () => {
  const { data } = await instance.get(API_URL.SEARCH_WINE_ADMIN);
  return data;
};

/**
 * GET 음식명으로 음식 검색
 * @description 자동완성을 위한 음식명으로 음식 검색
 */
export const getSearchFood = async (keywords: string) => {
  const { data } = await instance.get<IFoodSearch[]>(API_URL.SEARCH_FOOD, {
    params: {
      keywords,
    },
  });
  return data;
};
