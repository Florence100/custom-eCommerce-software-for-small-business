import { useSelector } from 'react-redux';
import { BasketIcon } from '@/components/ui';
import './HeaderCart.css';

export function HeaderCart () {
    const total = useSelector(state => state.cart.totalCount)

    return (
        <div className='cart'>
            <BasketIcon />
            <div className='cart__counter'>{total}</div>
        </div>
    )
}