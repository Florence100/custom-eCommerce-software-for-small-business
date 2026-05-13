import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Logo, Navigation } from '@/components/ui';
import { Container } from '../index';
import { AuthStatus } from '@/features/auth';
import { HeaderCart } from '@/features/cart';
import { HeaderFavorite } from '@/features/favorite';
import { SearchInput } from '@/features/products';
import { Coverage } from '@/components/ui';

import './Header.css';

export function Header () {
    let [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <div className='header'>
            <Container>

                <div className='header-content'>
                    <Logo />
                    <div className='header__centre'>
                        <SearchInput className='search-input input'/>
                        <Navigation className='nav'/>
                    </div>
                    <div className='header__right'>
                        <div className='user-actions'>
                            <HeaderFavorite />
                            <HeaderCart />
                            <AuthStatus 
                                onClick={() => navigate('/login')}
                            />
                        </div>
                        <button
                            className='header__burger'
                            onClick={() => setIsMenuOpen(prev => !prev)}
                            aria-label='Open navigation'
                        >
                            ☰
                        </button>
                    </div>
                </div>

                <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu--open' : ''}`}>
                    <SearchInput
                         className='search-input input search-input_mobile-menu'
                    />
                    <Navigation className='nav nav_mobile-menu'/>
                </div>
                
                <Coverage 
                    isVisible={isMenuOpen}
                    onClick={() => setIsMenuOpen(prev => !prev)}
                />

            </Container>
        </div>
    )
}