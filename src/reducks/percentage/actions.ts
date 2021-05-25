export const CHANGE_PERCENTAGE = "CHANGE_PERCENTAGE";
export const changePercentage = (percentageState: number) => {
  return {
    type: CHANGE_PERCENTAGE,
    payload: {
      percentageState: percentageState,
    },
  };
};
