import { ProductList } from '@/features/products';
import { Categories } from '@/features/products';
import { Container, SideBar } from '@/components/layouts';
import { SortControl } from '@/features/products';
import './ProductPage.css';

export function ProductPage() {
    return (
        <Container>
            <div className='product-page'>

                <SideBar>
                    <Categories />
                </SideBar>

                <main className='product-page__main'>
                    <SortControl />
                    <ProductList />
                </main>

            </div>
        </Container>
    )
}