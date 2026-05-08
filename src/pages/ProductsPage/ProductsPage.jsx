import { ProductList } from '@/features/products';
import { Categories } from '@/features/products';
import { Container, SideBar } from '@/components/layouts';
import './ProductPage.css';

export function ProductPage() {
    return (
        <Container>
            <div className='product-page'>
                <SideBar>
                    <Categories />
                </SideBar>
                <ProductList />
            </div>
        </Container>
    )
}