import { useSelector } from 'react-redux';
import { HeartIcon } from '@/components/ui';
import './HeaderFavorite.css';

export function HeaderFavorite () {
    const favoriteCount = useSelector((state) => state.favorite.totalCount);

    return (
        <div className='header-favorite'>
            <HeartIcon />
            <div className='header-favorite__counter'>{favoriteCount}</div>
        </div>
    )
}