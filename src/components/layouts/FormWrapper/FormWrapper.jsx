import './FormWrapper.css';

export function FormWrapper (props) {
    return (
        <div className="form-wrapper">
            { props.children }
        </div>
    )
}