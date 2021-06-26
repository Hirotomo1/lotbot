export const CHANGE_MAPAPI = "CHANGE_MAPAPI";
export const changeMapApi = (mapApiState: string) => {
  return {
    type: CHANGE_MAPAPI,
    payload: mapApiState,
  };
};
