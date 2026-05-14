import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { LoginPage, ProductsPage, ProductDetailsPage } from './pages';
import { AuthLayout, MainLayout } from '@/components/layouts';


export function ProtectedRoute() {
    const user = useSelector(state => state.auth.user);

    return user ? <Outlet /> : <Navigate to='/login' replace />;
}

export default function App () {
    return (
        <BrowserRouter>
            <Routes>

                <Route path='/' element={<Navigate to='/catalog' replace />} />

                <Route element={<AuthLayout />}>
                    <Route path='login' element={<LoginPage />} />
                </Route>

                <Route element={<ProtectedRoute />}>
                    <Route path='/catalog' element={<MainLayout />}>
                        <Route index element={<ProductsPage />} />
                        <Route path=':categoryName' element={<ProductsPage />} />
                    </Route>

                    <Route path='/detail' element={<MainLayout />}>
                        <Route path=':productId' element={<ProductDetailsPage />} />
                    </Route>
                </Route>

            </Routes>
        </BrowserRouter>
    );
};