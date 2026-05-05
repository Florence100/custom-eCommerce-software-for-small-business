import './Input.css';

export function Input ({ label, error, icon, ...props }) {
    return (
        <div className="input-wrapper">
            { label && <label>{label}</label> }

            <div className="input-field-container">
                { icon && <span className="input-icon">{icon}</span> }
                <input 
                    className={ error ? 'input--error' : 'input' }
                    { ...props }
                />
            </div>
            
            { error && <span className="error-message">{error}</span> }
        </div>
    )
}