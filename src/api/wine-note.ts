import instance from './instance';
import type {
  IRelatedWineNote,
  IResponse,
  ITimelineWineNoteList,
  IWineNoteDetail,
} from '~/types';

/**
 * GET 모든 와인노트 목록
 */
export const getWineNotes = async () => {
  const { data } = await instance.get<IResponse<ITimelineWineNoteList>>(
    `/v1/wine-note`,
  );
  return data;
};

/**
 * GET 와인 노트 상세보기
 */
export const getWineNote = async (wineNoteId: number) => {
  const { data } = await instance.get<IResponse<IWineNoteDetail>>(
    `/v1/wine-note/${wineNoteId}`,
  );
  return data;
};

/**
 * POST 와인 노트 등록
 */
export const postWineNote = async (data: any) => {
  await instance.post(`/v1/wine-note`, data);
};

/**
 * POST 와인노트 좋아요
 */
export const postWineNoteLike = async (wineNoteId: number) => {
  await instance.post(`/v1/wine-note-like`, {
    wineNoteId,
  });
};

/**
 * PATCH 잘맞아요/안맞아요
 */
export const patchWineNoteFitsMe = async (wineNoteId: number) => {
  await instance.patch(`/v1/wine-note-fits-me`, {
    wineNoteId,
  });
};

/**
 * PATCH 와인노트 공개여부 변경
 */
export const patchWineNotePublic = async (wineNoteId: number) => {
  await instance.patch(`/v1/wine-note-public`, {
    wineNoteId,
  });
};

/**
 * PATCH 와인노트 와인명 공개여부 변경 (관리자)
 */
export const patchWineNoteWineNamePublicAdmin = async (wineNoteId: number) => {
  await instance.patch(`/v1/manager/wine-note-wine-name-public`, {
    wineNoteId,
  });
};

/**
 * GET 타임라인
 */
export const getWineNoteTimeline = async () => {
  const { data } = await instance.get<IResponse<ITimelineWineNoteList>>(
    `/v1/wine-note-timeline`,
  );
  return data;
};

/**
 * GET 타임라인 상세보기
 * @description 내가 쓴 와인노트 상세보기
 */
export const getWineNoteTimelineDetail = async (wineNoteId: number) => {
  const { data } = await instance.get<IResponse<IWineNoteDetail>>(
    `/v1/wine-note-timeline/${wineNoteId}`,
  );
  return data;
};

/**
 * GET 이달의와인 목록
 */
export const getPopularWineNotes = async () => {
  const { data } = await instance.get<IResponse<IWineNoteDetail[]>>(
    `/v1/wine-note-popular`,
  );
  return data;
};

/**
 * GET 관련 와인 노트
 * @description wineType과 당도가 같고 음식명이 하나라도 중첩되는 노트
 */
export const getRelatedWineNotes = async (wineNoteId: number) => {
  const { data } = await instance.get<IResponse<IRelatedWineNote[]>>(
    `/v1/wine-note/related`,
    {
      params: {
        wineNoteId,
      },
    },
  );
  return data;
};

/**
 * GET 와인명 조회
 */
export const getSearchWineName = async (searchName: string) => {
  const { data } = await instance.get(`/v1/wine-name-search`, {
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
  const { data } = await instance.get(`/v1/manager/wine-name`);
  return data;
};

/**
 * GET 음식명 조회
 */
export const getSearchFoodName = async (keywords: string) => {
  const { data } = await instance.get(`/v1/wine-note-food`, {
    params: {
      keywords,
    },
  });
  return data;
};
