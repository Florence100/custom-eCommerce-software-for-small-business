import './SideBar.css';

export function SideBar (props) {
    return (
        <aside>
            { props.children }
        </aside>
    )
}