export interface IinitialState {
  margins: { margin: number };
  pipses: { pips: number };
  percentages: { percentage: number };
  answers: { answer: number };
  weatherApis: { weatherApi: string };
  usdJpyRates: { usJpRate: number };
  usdCadRates: { usCaRate: number };
  usdChfRates: { usChRate: number };
}

const initialState: IinitialState = {
  margins: { margin: 0 },
  pipses: { pips: 0 },
  percentages: { percentage: 0 },
  answers: { answer: 0 },
  weatherApis: { weatherApi: "" },
  usdJpyRates: { usJpRate: 0 },
  usdCadRates: { usCaRate: 0 },
  usdChfRates: { usChRate: 0 },
};

export default initialState;
