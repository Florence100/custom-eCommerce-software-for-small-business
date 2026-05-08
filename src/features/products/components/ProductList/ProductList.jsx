import { useParams } from 'react-router';
import { useGetAllQuery, useGetByCategoryQuery } from '../../services/products';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading, Error } from '@/components/ui';
import './ProductList.css';

export function ProductList() {
    const { categoryName } = useParams();

    const { data, error, isLoading } = categoryName ? useGetByCategoryQuery(categoryName) : useGetAllQuery();

    if (isLoading) return <Loading/>;
    if (error) return <Error>Something went wrong...</Error>

    const products = data.products;

    return (
        <div className='product-list'>
            {
                products.map((value) => {
                    return (
                        <ProductCard 
                            title = { value.title } 
                            img = { value?.images[0] }
                            price = { value.price }
                            key = { value.id }
                            discount = { value.discountPercentage }
                        />
                    )
                })
            }
        </div>
        
    )
}