import PropTypes from 'prop-types';


export default function Button({ text }) {
    return (
        <button className='bg-gradient-to-r from-cyan-400 to-cyan-500 w-48 px-2 py-2 rounded-full'>{text}</button>
    )
}

Button.propTypes = {
    text: PropTypes.string
};