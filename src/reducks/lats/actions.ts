export const CHANGE_LAT = "CHANGE_LAT";
export const changeLat = (latState: number) => {
  return {
    type: CHANGE_LAT,
    payload: latState,
  };
};
