import { Header } from '@/components/layouts';
import { Outlet } from 'react-router';
import './MainLayout.css';

export function MainLayout () {
    return (
        <div className='main-layout'>
            <Header />
            <Outlet />
        </div>
    )
}