import { BrowserRouter, Routes, Route, Navigate } from 'react-router';
import { LoginPage, RegisterPage, ProductsPage, ProductDetailsPage } from './pages';
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
                    <Route index element={<ProductsPage />} />
                    <Route path=":categoryName" element={<ProductsPage />} />
                </Route>

                <Route path="/detail" element={<MainLayout />}>
                    <Route path=":productId" element={<ProductDetailsPage />} />
                </Route>

            </Routes>
        </BrowserRouter>
    );
};