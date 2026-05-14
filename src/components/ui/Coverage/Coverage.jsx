import './Coverage.css';

export function Coverage({ className, onClick, ...props}) {
    return (
        <div 
            {...props}
            className={`coverage ${className}`}
            onClick={onClick}
        />
    )
}