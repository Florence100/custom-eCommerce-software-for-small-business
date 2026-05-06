import { useGetAllQuery } from '../../services/products';
import './ProductList.css';

export function ProductList() {
    const { data, error, isLoading } = useGetAllQuery();

    console.log('data', data);

    return (
        <>Product List</>
    )
}