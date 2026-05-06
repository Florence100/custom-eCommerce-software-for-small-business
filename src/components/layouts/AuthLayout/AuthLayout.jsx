import { Outlet } from 'react-router';
import './AuthLayout.css';

export function AuthLayout () {
    return (
        <div className='auth-page'>
            <Outlet />
        </div>
    )
}