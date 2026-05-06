import './Button.css';

export function Button ({ value, disabled, ...props }) {
    return (
        <button 
            className='button'
            disabled = { disabled }
            { ...props }
        >
            { props.children }
        </button>
    )
}