export const CHANGE_PIPS = "CHANGE_PIPS";
export const changePips = (pipsState: number) => {
  return {
    type: CHANGE_PIPS,
    payload: pipsState
  };
};
