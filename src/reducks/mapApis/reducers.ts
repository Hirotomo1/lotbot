import * as Actions from "./actions";
import initialState from "../store/initialState";

export const MapApisReducer = (
  state = initialState.mapApis,
  action: { type: string; payload: string }
) => {
  switch (action.type) {
    case Actions.CHANGE_MAPAPI:
      return {
        ...state,
        mapApi: action.payload,
      };
    default:
      return state;
  }
};
