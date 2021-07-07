export const CHANGE_RATE = "CHANGE_RATE";
export const changeUsJpRate = (rateState: number) => {
  return {
    type: CHANGE_RATE,
    payload: rateState,
  };
};
