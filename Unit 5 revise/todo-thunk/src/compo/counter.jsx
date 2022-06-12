import { useSelector, useDispatch } from "react-redux"
import { addCountAction, reduceCountAction } from "../redux/counter/action"


export const Countercompo = () => {
    const dispatch = useDispatch()
    const value = useSelector((state) => state.counter)
    // console.log(value.count)
    return <>
        <h1>count:{value.count}</h1>
        <button onClick={() => { dispatch(addCountAction(1)) }}>add</button>
        <button onClick={() => { dispatch(reduceCountAction(1)) }}>reduce</button>
    </>
}
