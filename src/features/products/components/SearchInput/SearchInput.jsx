import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '@/components/ui';
import searchIcon from '@/assets/images/icons/search.svg';
import useDebounce from '@/hooks/useDebounce';
import './SearchInput.css';

export function SearchInput () {
    const [ searchItem, setSearchItem ] = useState('');
    const debouncedSearch = useDebounce(searchItem, 500);
    const navigate = useNavigate();

    useEffect(() => {
        if (debouncedSearch.trim()) {
            navigate(`/catalog/search?q=${debouncedSearch}`);
        } else {
            navigate('/catalog');
        }
    }, [navigate, debouncedSearch])

    return (
        <Input 
            className='search-input input'
            icon={<img src={searchIcon} alt="" style={{ height: '100%', width: '1rem'}} />}
            onChange={(e) => setSearchItem(e.target.value)}
            value={searchItem}
            placeholder='Search products...'
        />
    )
}