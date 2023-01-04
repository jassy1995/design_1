import PropTypes from 'prop-types';


export default function Button({ text }) {
    return (
        <buttom className='bg-gradient-to-r from-cyan-400 to-cyan-500 w-48 px-2 py-2 rounded-full'>{text}</buttom>
    )
}

Button.propTypes = {
    text: PropTypes.string
};