export const CHANGE_CHJPRATE = "CHANGE_CHJPRATE";
export const changeChJpRate = (rateState: number) => {
  return {
    type: CHANGE_CHJPRATE,
    payload: rateState,
  };
};
