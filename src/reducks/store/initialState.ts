export interface IinitialState {
  margins: { margin: number };
  pipses: { pips: number };
  percentages: { percentage: number };
  answers: { answer: number };
  weatherApis: { weatherApi: string };
  usdJpyRates: { usJpRate: number };
  eurUsdRates: { euUsRate: number };
  gbpUsdRates: { gbUsRate: number };
}

const initialState: IinitialState = {
  margins: { margin: 0 },
  pipses: { pips: 0 },
  percentages: { percentage: 0 },
  answers: { answer: 0 },
  weatherApis: { weatherApi: "" },
  usdJpyRates: { usJpRate: 0 },
  eurUsdRates: { euUsRate: 0 },
  gbpUsdRates: { gbUsRate: 0 },
};

export default initialState;
