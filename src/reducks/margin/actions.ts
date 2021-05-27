export const CHANGE_MARGIN = "CHANGE_MARGIN";
export const changeMargin = (marginState: number) =>  {
    return{
    type: CHANGE_MARGIN,
    payload: marginState
    }
}
