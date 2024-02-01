import { ACTIONS } from "./App";

export function DigitButton({ digit, dispatch }) {
    return (
        <button onClick={() => {
            console.log(digit)
            dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit }})
        }}>{digit}</button>
    )
}