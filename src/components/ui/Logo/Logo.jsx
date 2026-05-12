import logo from '@/assets/images/img/logo.svg';
import './Logo.css';

export function Logo () {
    return (
        <div className='logo'>
            <img className='logo__img' src={ logo }></img>
            <div className='logo__text'>online market</div>
        </div>
    )
}