export const CHANGE_WEATHERAPI = "CHANGE_WEATHERAPI";
export const changeWeatherApi = (weatherApiState: string) => {
  return {
    type: CHANGE_WEATHERAPI,
    payload: weatherApiState,
  };
};
