import instance from './instance';

/**
 * GET 타임라인
 */
export const getWineNoteTimeline = async () => {
  const { data } = await instance.get(`/v1/wine-note-timeline`);
  return data;
};

/**
 * GET 모든 와인노트 목록
 */
export const getWineNote = async () => {
  const { data } = await instance.get(`/v1/wine-note`);
  return data;
};

/**
 * GET 이달의와인 목록
 */
export const getWineNotePopular = async () => {
  const { data } = await instance.get(`/v1/wine-note-popular`);
  return data;
};
