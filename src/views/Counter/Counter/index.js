import { connect } from "react-redux";
import { decrement, increment, reset } from "../../../common-state/counter/counterAction";
import { useDispatch } from "react-redux";
import { useState } from "react";

const Counter = ({ counter }) => {
    const dispatch = useDispatch();
    const [numberInput, setNumberInput] = useState(1);

    const handleDecrement = () => {
        dispatch(decrement(+numberInput))
    }

    const handleIncrement = () => {
        dispatch(increment(+numberInput))
    }

    const handleReset = () => {
        setNumberInput(1)
        dispatch(reset());
    }

    const handleChangeNumber = (e) => {
        setNumberInput(e.target.value)
    }

    return(
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <div>
                <input type="number" value={numberInput} onChange={handleChangeNumber} />
            </div>
            <button onClick={handleReset}>Reset</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counter: state.counter.counter
});

const mapDispatchToProps = dispatch => ({
    onClickDecrement: () =>
        dispatch({ type: decrement })
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter);