interface IinitialState {
  margin: number;
}
const initialState: IinitialState = {
  margin: 0,
};

export default function reducer(
  state = initialState,
  action: { type: string; param: number | null }
) {
  switch (action.type) {
    case "CHANGEMARGIN":
      return {
        margin: action.param,
      };

    default:
      return state;
  }
}
