import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../store/favoriteSlice';
import { HeartIcon } from '@/components/ui';
import './AddToFavoriteBtn.css';

export function AddToFavoriteBtn ({ productId, productTitle }) {
    const dispatch = useDispatch();

    const existingItem = useSelector((state) => {
        const favorite = state.favorite.items;
        return favorite.find((item) => item.id === productId);
    })

    function onClickHandler() {
        dispatch(toggleFavorite({id: productId, title: productTitle}));
    }

    return (
        <button 
            className={existingItem ? 'add-to-favorite active' : 'add-to-favorite'}
            onClick={onClickHandler}
        >
            <HeartIcon />
        </button>
    )
}