import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import './SortControl.css';


export function SortControl () {
    const location = useLocation();
    let currentPath = location.pathname;

    const [orderBy, setOrderBy] = useState('');
    const [order, setOrder] = useState('');

    const queryParams = new URLSearchParams(location.search);
    const searchQuery = queryParams.get('q');

    if (searchQuery) {
        currentPath += `?q=${searchQuery}`;
    }

    return (
        <div className='sort-control'>
            <h4 className='sort-control__title'>Sort by:</h4>

            <div className='sort-control__container'>
                <Link 
                    to={`${currentPath}${searchQuery ? '&' : '?'}&sortBy=price&order=asc`}
                    onClick={() => {
                        setOrderBy('price');
                        setOrder('asc');
                    }}
                    className={
                        (orderBy === 'price' && order ==='asc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Lowest Price
                </Link>
                <Link 
                    to={`${currentPath}${searchQuery ? '&' : '?'}&sortBy=price&order=desc`}
                    onClick={() => {
                        setOrderBy('price');
                        setOrder('desc');
                    }}
                    className={
                        (orderBy === 'price' && order ==='desc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Highest Price
                </Link>
            </div>

            <div className='sort-control__container'>
                <Link 
                    to={`${currentPath}${searchQuery ? '&' : '?'}&sortBy=rating&order=asc`}
                    onClick={() => {
                        setOrderBy('rating');
                        setOrder('asc');
                    }}
                    className={
                        (orderBy === 'rating' && order ==='asc') 
                            ? 'link sort-control__link active' 
                            : 'link sort-control__link'
                    }
                >
                    Lowest Rated
                </Link>
                <Link 
                    to={`${currentPath}${searchQuery ? '&' : '?'}&sortBy=rating&order=desc`}
                    onClick={() => {
                        setOrderBy('rating');
                        setOrder('desc');
                    }}
                    className={
                        (orderBy === 'rating' && order ==='desc') 
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