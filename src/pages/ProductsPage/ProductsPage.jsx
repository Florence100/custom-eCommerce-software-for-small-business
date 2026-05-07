import { ProductList } from '@/features/products';
import { MainLayout } from '@/components/layouts';
import './ProductPage.css';

export function ProductPage() {
    return (
        <>
            <MainLayout>
                <ProductList />
            </MainLayout>
        </>
    )
}