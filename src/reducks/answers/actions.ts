export const DO_ANSWER = "DO_ANSWER";
export const doAnswer = (answerState: number) => {
    return{
    type: DO_ANSWER,
    payload: answerState
    }
}