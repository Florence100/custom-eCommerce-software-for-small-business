import { AddToFavoriteBtn } from '@/features/favorite';
import { AddToCartControl } from '@/features/cart';
import './ProductCard.css';

export function ProductCard ({ id, title, price, img  = null }) {
    return (
        <div className='card'>
            { img 
                ? <img src={img} alt='photo' className='card__img'/> 
                : <div className='card__fallback'>No image</div> 
            }
            <div className='card__info'>
                <div className='card__title'>{title}</div>
                <div className='card__price'>{price} €</div>
                <AddToFavoriteBtn 
                    productId={id}
                    productTitle={title}
                />
                <AddToCartControl 
                    productId={id}
                    productTitle={title}
                    productPrice={price}
                />
            </div>
        </div>
    )
}