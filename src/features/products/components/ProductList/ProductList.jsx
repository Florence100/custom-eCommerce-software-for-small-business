import { useParams, useLocation, useNavigate } from 'react-router';
import { useGetAllQuery, useGetByCategoryQuery } from '../../services/products';
import { ProductCard } from '../ProductCard/ProductCard';
import { Loading, Error } from '@/components/ui';
import './ProductList.css';

export function ProductList() {
    const PRODUCT_LIMIT = 30;

    const { categoryName } = useParams();
    const navigate = useNavigate();
    const location = useLocation();

    const search = location.search;
    const queryParams = new URLSearchParams(search);

    const searchQuery = queryParams.get('q')?.toLowerCase() || '';
    const sortByQuery = queryParams.get('sortBy') || '';
    const orderQuery = queryParams.get('order') || '';

    const allProductsQuery = useGetAllQuery(
        {
            limit: searchQuery ? 0 : PRODUCT_LIMIT,
            sortBy: sortByQuery,
            order: orderQuery,
        },
        {
            skip: !!categoryName,
        }
    );

    const categoryProductsQuery = useGetByCategoryQuery(
        {
            category: categoryName,
            limit: searchQuery ? 0 : PRODUCT_LIMIT,
            sortBy: sortByQuery,
            order: orderQuery,
        },
        {
            skip: !categoryName,
        }
    );

    const request = categoryName
        ? categoryProductsQuery
        : allProductsQuery;

    const { data, error, isLoading } = request;

    if (isLoading) return <div className='product-list'><Loading/></div>;
    if (error) return <Error>Something went wrong...</Error>

    let products = data.products;

    if (searchQuery) {
        products = products.filter((product) =>
            product.title
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
        );
    }

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
                            rating={value.rating}
                            onClick={() => {navigate(`/detail/${value.id}`)}}
                        />
                    )
                })
            }
        </div>
    )
}