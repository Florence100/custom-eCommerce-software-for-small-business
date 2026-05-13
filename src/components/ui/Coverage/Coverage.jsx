import './Coverage.css';

export function Coverage({ isVisible, onClick, ...props}) {
    return (
        <div 
            {...props}
            className={`coverage ${isVisible ? 'isVisible' : ''}`}
            onClick={onClick}
        />
    )
}