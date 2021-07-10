export const CHANGE_CAJPRATE = "CHANGE_CAJPRATE";
export const changeCaJpRate = (rateState: number) => {
  return {
    type: CHANGE_CAJPRATE,
    payload: rateState,
  };
};
