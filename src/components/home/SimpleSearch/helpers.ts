export enum STEP {
  FOOD = 1,
  PRICE,
  SWEET,
}

export const indicatorPosX: Record<STEP, number> = {
  [STEP.FOOD]: 0,
  [STEP.PRICE]: 163,
  [STEP.SWEET]: 326,
};
