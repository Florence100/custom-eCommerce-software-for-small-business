import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@/components/ui';
import { addToCart, removeFromCart } from '@/features/cart/store/cartSlice';
import './AddToCartControl.css';

export function AddToCartControl ({ productId, productTitle, productPrice }) {
    const dispatch = useDispatch();
    
    const existingItem = useSelector((state) => {
        const cart = state.cart.items;
        return cart.find((item) => item.id === productId);
    })

    function increaseHandler () {
        dispatch(addToCart({
            id: productId,
            title: productTitle,
            price: productPrice
        }))
    }

    function decreaseHandler () {
        dispatch(removeFromCart({
            id: productId,
            title: productTitle,
            price: productPrice
        }))
    }

    return (
        <div className='cart-control'>
            { existingItem 
                ?
                    <>
                        <Button 
                            aria-label='Decrease'
                            onClick={decreaseHandler}
                        >–</Button>
                        <div className='product-counter'>{ existingItem.count }</div>
                        <Button 
                            aria-label='Increase'
                            onClick={increaseHandler}
                        >+</Button>
                    </>
                :
                    <Button 
                        onClick={increaseHandler}
                        className='button cart-control__add-btn'
                    >
                        Add to cart
                    </Button>
            }
        </div>
    )
}