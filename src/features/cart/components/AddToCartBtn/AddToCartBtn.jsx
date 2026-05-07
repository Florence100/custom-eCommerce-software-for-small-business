import { BasketIcon } from '@/components/ui';
import './AddToCartBtn.css';

export function AddToCartBtn () {
    return (
        <button className='add-to-cart'>
            <BasketIcon />
        </button>
    )
}