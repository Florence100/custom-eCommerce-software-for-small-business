import './SideBar.css';

export function SideBar (props) {
    return (
        <aside className='side-bar'>
            { props.children }
        </aside>
    )
}