export const CHANGE_LNG = "CHANGE_LNG";
export const changeLng = (lngState: number) => {
  return {
    type: CHANGE_LNG,
    payload: lngState,
  };
};
