import { decrement, increment } from 'components/store/counter/actions';
import { useDispatch, useSelector } from 'react-redux';

export const Counter = () => {
  const { total, step } = useSelector(state => state.counter);

  const dispatch = useDispatch();

  const handleClickPlus = () => dispatch(increment(step));
  const handleClickMinus = () => dispatch(decrement(step));
  return (
    <div>
      <h2>Counter</h2>
      <p>total: {total}</p>
      <div>
        <button onClick={handleClickPlus}>+1</button>
        <button onClick={handleClickMinus}>-1</button>
      </div>
    </div>
  );
};
