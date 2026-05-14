import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { Input } from '@/components/ui';
import searchIcon from '@/assets/images/icons/search.svg';
import useDebounce from '@/hooks/useDebounce';
import './SearchInput.css';

export function SearchInput (props) {
    const navigate = useNavigate();
    const location = useLocation();

    const params = new URLSearchParams(location.search);

    const q = params.get('q') || '';

    const [value, setValue] = useState(q);
    
    const debouncedValue = useDebounce(value, 500);

    useEffect(() => {
        setValue(q);
    }, [q]);

    function onChangeHandler(e) {
        setValue(e.target.value);
    }

    useEffect(() => {
        const params = new URLSearchParams(location.search);

        const currentQ = params.get('q') || '';

        if (debouncedValue === currentQ) {
            return;
        }

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
    }, [debouncedValue, location.pathname]);

    return (
        <Input 
            {...props}
            icon={<img src={searchIcon} alt='Icon' />}
            onChange={onChangeHandler}
            value={value}
            placeholder='Search products...'
            name='search-input'
        />
    )
}