import PropTypes from 'prop-types';

const Congrats = ({ success }) => {
    return <h3 data-test="congrats-component">
        {success ? 'Congrats! You have guessed the word!' : ''}
    </h3>
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired,
}

export default Congrats;