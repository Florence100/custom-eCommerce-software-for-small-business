import { Input } from '@/components/ui';
import searchIcon from '@/assets/images/icons/search.svg';
import './SearchInput.css';

export function SearchInput () {
    return (
        <Input 
            className="search-input input"
            icon={<img src={searchIcon} alt="" style={{ height: '100%', width: '1rem'}} />}
        />
    )
}