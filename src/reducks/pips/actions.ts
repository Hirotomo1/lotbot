export const CHANGE_PIPS = "CHANGE_PIPS";
export const changePips = (pipsState: any) => {
  return {
    type: "CHANGE_PIPS",
    payload: {
      margin: pipsState.param,
    },
  };
};
