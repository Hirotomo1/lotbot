export const ANSWER = "ANSWER";
export const doAnswer = (answerState: number) => {
    return{
    type: ANSWER,
    payload: answerState
    }
}