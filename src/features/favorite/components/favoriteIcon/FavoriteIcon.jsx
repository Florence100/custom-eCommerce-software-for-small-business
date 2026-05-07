import { HeartIcon } from '@/components/ui';
import './FavoriteIcon.css';

export function FavoriteIcon () {
    return (
        <div className='favorite'>
            <HeartIcon />
            <div className='favorite__counter'>3</div>
        </div>
    )
}