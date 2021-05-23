export const CHANGE_PERCENTAGE = "CHANGE_PERCENTAGE";
export const changePercentage = (percentageState: any) => {
  return {
    type: "CHANGE_PERCENTAGE",
    payload: {
      margin: percentageState.param,
    },
  };
};
