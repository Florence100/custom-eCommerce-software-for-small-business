import { useState } from 'react';
import { ProductList, SortControl, Categories } from '@/features/products';
import { Container, SideBar } from '@/components/layouts';
import { ArrowIcon, Coverage } from '@/components/ui';
import './ProductsPage.css';

export function ProductsPage() {
    const [isOpened, setIsOpened] = useState(false);

    const onClickHandler = () => {
        setIsOpened(!isOpened);
    }

    return (
        <Container>
            <div className='product-page'>

                <SideBar>
                    <h3 className='side-bar__title'>Categories</h3>
                    <button 
                        className='side-bar__toggle-btn'
                        onClick={onClickHandler}
                        aria-label='Open categories'
                    >
                        Categories
                        <ArrowIcon className={isOpened ? 'side-bar__arrow-icon up' : 'side-bar__arrow-icon' }/>
                    </button>
                    <Categories 
                        className={ isOpened ? 'categories opened' : 'categories' }
                    />
                </SideBar>

                <main className='product-page__main'>
                    <SortControl />
                    <ProductList />
                </main>

                <Coverage 
                    isVisible={isOpened}
                    onClick={onClickHandler}
                    style={{ opacity: 0 }}
                />

            </div>
        </Container>
    )
}