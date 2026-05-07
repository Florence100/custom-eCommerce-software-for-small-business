import { useGetAllQuery } from '../../services/products';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.css';

export function ProductList() {
    const { data, error, isLoading } = useGetAllQuery();

    console.log('data', data);

    if (!data) return;

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