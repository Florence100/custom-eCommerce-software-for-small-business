import './Form.css';

export function Form ({ children, title, ...props }) {
    return (
        <div className="ui-form-container">
            { title && <h2 className="text-center">{ title }</h2> }
            <form className="ui-form" {...props}>
                { children }
            </form>
        </div>
    )
}