export const CHANGE_USJPRATE = "CHANGE_USJPRATE";
export const changeUsJpRate = (rateState: number) => {
  return {
    type: CHANGE_USJPRATE,
    payload: rateState,
  };
};
