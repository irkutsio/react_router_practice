import { setStep } from 'components/store/counter/actions';
import { useDispatch } from 'react-redux';

export const Step = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target.elements.step;
    dispatch(setStep(Number(value)));
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="number" name="step" placeholder="step" />
        <button type="submit">Set step</button>
      </form>
    </div>
  );
};
