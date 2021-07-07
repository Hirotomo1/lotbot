export const CHANGE_RATE = "CHANGE_RATE";
export const changeRate = (rateState: number) => {
  return {
    type: CHANGE_RATE,
    payload: rateState,
  };
};
