import { useParams, Link } from 'react-router';
import { Container } from '@/components/layouts';
import { ProductFull } from '@/features/products';
import './ProductDetailsPage.css';

export function ProductDetailsPage () {
    let { productId } = useParams();

    return (
        <div className='detail-page'>
            <Container>
                <main className='detail-page__main'>
                    <Link to='/catalog' className='link detail-page__link'>Go back</Link>
                    <ProductFull productId={productId}/>
                </main>
            </Container>
        </div>
    )
}