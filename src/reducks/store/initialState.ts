export interface IinitialState {
  margins: { margin: number };
  pipses: { pips: number };
  percentages: { percentage: number };
  answers: { answer: number };
  lats: { lat: number };
  lngs: { lng: number };
  weatherApis: { weatherApi: string };
}

const initialState: IinitialState = {
  margins: { margin: 0 },
  pipses: { pips: 0 },
  percentages: { percentage: 0 },
  answers: { answer: 0 },
  lats: { lat: 0 },
  lngs: { lng: 0 },
  weatherApis: { weatherApi: "" },
};

export default initialState;
