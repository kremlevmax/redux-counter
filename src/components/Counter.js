import { useSelector, useDispatch } from "react-redux";
import { counterSliceActions } from "../store/index";

import classes from "./Counter.module.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterSliceActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterSliceActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterSliceActions.increase(5));
  };

  const decreaseHandler = () => {
    dispatch(counterSliceActions.decrease(5));
  };

  const toggleCounterHandler = () => {
    dispatch(counterSliceActions.toggle(5));
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={incrementHandler}>Increment</button>
      <button onClick={decrementHandler}>Decrement</button>
      <button onClick={increaseHandler}>Increase for 5</button>
      <button onClick={decreaseHandler}>Decrease for 5</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
