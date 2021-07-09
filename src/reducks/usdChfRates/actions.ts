export const CHANGE_USCHRATE = "CHANGE_USCHRATE";
export const changeUsChRate = (rateState: number) => {
  return {
    type: CHANGE_USCHRATE,
    payload: rateState,
  };
};
