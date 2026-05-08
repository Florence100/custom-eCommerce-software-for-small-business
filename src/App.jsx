import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { LoginPage, RegisterPage, ProductPage } from './pages';
import { AuthLayout, MainLayout } from '@/components/layouts';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Navigate to="/catalog" replace />} />

                <Route element={<AuthLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>

                <Route path="/catalog" element={<MainLayout />}>
                    <Route index element={<ProductPage />} />
                    <Route path=":categoryName" element={<ProductPage />} />
                    <Route path="search" element={<ProductPage />} />
                </Route>
                
            </Routes>
        </BrowserRouter>
    );
};