import { useState, useEffect } from 'react';
import { useNavigate, useLocation, useSearchParams } from 'react-router';
import { Input } from '@/components/ui';
import searchIcon from '@/assets/images/icons/search.svg';
import useDebounce from '@/hooks/useDebounce';
import './SearchInput.css';

export function SearchInput (props) {
    const navigate = useNavigate();
    const location = useLocation();

    const [searchParams] = useSearchParams();

    const queryFromUrl = searchParams.get('q') || '';

    const [value, setValue] = useState(queryFromUrl);

    const debouncedValue = useDebounce(value, 500);

   useEffect(() => {
        const params = new URLSearchParams(location.search);

        if (debouncedValue.trim()) {
            params.set('q', debouncedValue);
        } else {
            params.delete('q');
        }

        navigate(
            {
                pathname: location.pathname,
                search: params.toString(),
            },
            { replace: true }
        );
    }, [
        debouncedValue,
        navigate,
        location.pathname,
    ]);

    return (
        <Input 
            {...props}
            icon={<img src={searchIcon} alt="" style={{ height: '100%', width: '1rem'}} />}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder='Search products...'
            name='search-input'
        />
    )
}