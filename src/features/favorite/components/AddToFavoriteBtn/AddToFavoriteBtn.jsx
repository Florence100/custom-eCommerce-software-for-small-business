import { HeartIcon } from '@/components/ui';
import './AddToFavoriteBtn.css';

export function AddToFavoriteBtn () {
    return (
        <button className='add-to-favorite'>
            <HeartIcon />
        </button>
    )
}