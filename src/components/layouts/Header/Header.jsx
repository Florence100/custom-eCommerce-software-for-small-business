import { Logo } from '@/components/ui/index';
import { Container } from '../index';
import { AuthStatus } from '@/features/auth';
import { CartIcon } from '@/features/cart';
import { FavoriteIcon } from '@/features/favorite';
import { SearchInput } from '@/features/search';
import { Navigation } from '@/components/ui/index';
import './Header.css';

export function Header () {
    return (
        <div className='header'>
            <Container>
                <div className='header-content'>
                    <Logo />
                    <div className='header__centre'>
                        <SearchInput />
                        <Navigation />
                    </div>
                    <div className='user-actions'>
                        <FavoriteIcon />
                        <CartIcon />
                        <AuthStatus />
                    </div>
                </div>
            </Container>
        </div>
    )
}