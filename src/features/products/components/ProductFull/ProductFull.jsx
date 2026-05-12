import { useGetOneQuery } from '../../services/products';
import { Loading, Error, ImageGallery } from '@/components/ui';
import { AddToFavoriteBtn } from '@/features/favorite';
import { AddToCartControl } from '@/features/cart';
import './ProductFull.css';

export function ProductFull ({ productId }) {
    const { data, error, isLoading } = useGetOneQuery(productId);
    if (isLoading) return <div className='product-list'><Loading/></div>;
    if (error) return <Error>Something went wrong...</Error>

    console.log(data)

    return (
        <div className='product-full'>
            <h2 className='product-full__title'>{data.title}</h2>
            <div className='product-full__container'>
                <div className='product-full__imgs'>
                    <ImageGallery images={data.images} />
                </div>
                <div className='product-full__info'>
                    <label className='product-full__favorite'>
                        <AddToFavoriteBtn 
                            productId={data.id}
                            productTitle={data.title}
                        />
                        Add to favorite
                    </label>

                    <div className='product-full__block'>
                        <h4 className='product-full__brand'>{data.brand}</h4>
                        <p className='product-full__desc'>{data.description}</p>
                        <div className='product-full__rating'>★ {data.rating}</div>
                        <div className='product-full__price'>${data.price}</div>
                    </div>
                    
                    <AddToCartControl 
                        productId={data.id}
                        productTitle={data.title}
                        productPrice={data.price}
                    />
                </div>
            </div>
        </div>
    )
}