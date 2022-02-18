const Congrats = ({ success }) => {
    return <div data-test="congrats-component">
        {success ? 'Congrats! You have guessed the word!' : ''}
    </div>
}

export default Congrats