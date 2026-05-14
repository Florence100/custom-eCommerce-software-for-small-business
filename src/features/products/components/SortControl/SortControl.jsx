import { Link, useLocation } from 'react-router';
import './SortControl.css';

export function SortControl () {
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const sortBy = params.get('sortBy');
    const order = params.get('order');

    function createSortLink(sortBy, order) {
        const params = new URLSearchParams(location.search);

        params.set('sortBy', sortBy);
        params.set('order', order);

        return {
            pathname: location.pathname,
            search: params.toString(),
        };
    }

    return (
        <div className='sort-control'>
            <h4 className='sort-control__title'>Sort by:</h4>

            <div className='sort-control__container'>
                <Link 
                    to={createSortLink('price', 'asc')}
                    className={
                        (sortBy === 'price' && order ==='asc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Lowest Price
                </Link>
                <Link 
                    to={createSortLink('price', 'desc')}
                    className={
                        (sortBy === 'price' && order ==='desc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Highest Price
                </Link>
            </div>

            <div className='sort-control__container'>
                <Link 
                    to={createSortLink('rating', 'asc')}
                    className={
                        (sortBy === 'rating' && order ==='asc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Lowest Rated
                </Link>
                <Link 
                    to={createSortLink('rating', 'desc')}
                    className={
                        (sortBy === 'rating' && order ==='desc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Highest Rated
                </Link>
            </div>
        </div>
    )
}