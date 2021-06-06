export interface IinitialState {
  margins:{ margin: number }
  pipses:{ pips: number }
  percentages:{ percentage: number }
  answers:{ answer: number }
}

const initialState : IinitialState = {
   margins:{ margin: 0 },
   pipses:{ pips: 0 },
   percentages:{ percentage: 0 },
   answers:{ answer: 0 },
}

export default initialState