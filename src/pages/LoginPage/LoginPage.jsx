import { Link } from 'react-router';
import { LoginForm } from '../../features/auth';
import './LoginPage.css';

export function LoginPage () {
    return (
        <div className='login'>
            <div className='login__wrapper'>
                <LoginForm />
                <Link className='link text-center' to='/register'>
                    Don't have an account yet? Sign up.
                </Link>
            </div>
        </div>
    )
}