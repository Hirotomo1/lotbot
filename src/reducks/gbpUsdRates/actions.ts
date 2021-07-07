export const CHANGE_RATE = "CHANGE_RATE";
export const changeGbUsRate = (rateState: number) => {
  return {
    type: CHANGE_RATE,
    payload: rateState,
  };
};
