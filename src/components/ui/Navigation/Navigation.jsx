import { NavLink } from 'react-router';
import './Navigation.css';

export function Navigation () {
    return (
        <nav className="nav">
            <ul className="nav__list">
                <li className="nav__item">
                    <NavLink
                        to="/#"
                        className={({ isActive }) => isActive ? "active" : "" }
                    >
                        About us
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/#"
                        className={({ isActive }) => isActive ? "active" : "" }
                    >
                        All shops
                    </NavLink>
                </li>
                <li className="nav__item">
                    <NavLink
                        to="/#"
                        className={({ isActive }) => isActive ? "active" : "" }
                    >
                        Become a merchant
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}