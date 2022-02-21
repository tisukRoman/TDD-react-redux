import { useSelector } from 'react-redux';

const Input = () => {
  const success = useSelector((state) => state.success);

  return (
    <div data-test='input-component'>
      {!success && (
        <>
          <input type='text' data-test='input-box' />
          <button data-test='submit-button'>Guess</button>
        </>
      )}
    </div>
  );
};

export default Input;
