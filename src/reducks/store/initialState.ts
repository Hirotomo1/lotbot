interface IinitialState {
  margin: number;
  pips: number;
  percentage: number
  truePips: number
  truePercentage: number
}

const initialState : IinitialState = {
    margin: 0,
    pips: 0,
    percentage: 0,
    truePips: 0,
    truePercentage: 0
}

export default initialState