import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
    return <div data-test="congrats-component">
        {success ? 'Congrats! You have guessed the word!' : ''}
    </div>
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;