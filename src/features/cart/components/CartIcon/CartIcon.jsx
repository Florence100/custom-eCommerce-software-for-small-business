import { BasketIcon } from '@/components/ui';
import './CartIcon.css';

export function CartIcon () {
    return (
        <div className='cart'>
            <BasketIcon />
            <div className='cart__counter'>3</div>
        </div>
    )
}