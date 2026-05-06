import { BrowserRouter, Routes, Route } from 'react-router';
import { LoginPage, RegisterPage, ProductPage } from './pages';
import { AuthLayout } from '@/components/layouts';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="login" element={<LoginPage />} />
                    <Route path="register" element={<RegisterPage />} />
                </Route>
                <Route path="/" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
};