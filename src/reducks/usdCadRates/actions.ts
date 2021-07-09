export const CHANGE_USCARATE = "CHANGE_USCARATE";
export const changeUsCaRate = (rateState: number) => {
  return {
    type: CHANGE_USCARATE,
    payload: rateState,
  };
};
