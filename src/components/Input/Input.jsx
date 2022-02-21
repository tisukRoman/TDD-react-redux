const Input = ({success}) => {
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
