import { useParams, useLocation } from 'react-router';
import { useGetAllQuery, useGetByCategoryQuery, useSearchQuery } from '../../services/products';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading, Error } from '@/components/ui';
import './ProductList.css';

export function ProductList() {
    const { categoryName } = useParams();
    const { search } = useLocation();

    const queryParams = new URLSearchParams(search);
    const searchQuery = queryParams.get('q');

    let request;

    if (searchQuery) {
        request = useSearchQuery(searchQuery);
    } else if (categoryName) {
        request = useGetByCategoryQuery(categoryName);
    } else {
        request = useGetAllQuery();
    }

    const { data, error, isLoading } = request;

    if (isLoading) return <div className='product-list'><Loading/></div>;
    if (error) return <Error>Something went wrong...</Error>

    let products = data.products;

    return (
        <div className='product-list'>
            {
                products.map((value) => {
                    return (
                        <ProductCard 
                            id={value.id}
                            title={value.title} 
                            img={value?.images[0]}
                            price={value.price}
                            key={value.id}
                        />
                    )
                })
            }
        </div>
    )
}