import { Link } from 'react-router';
import { LoginForm } from '@/features/auth';
import { FormWrapper } from '@/components/ui';

export function LoginPage () {
    return (
        <div>
            <FormWrapper>
                <LoginForm />
                <Link className='link text-center' to='/register'>
                    Don't have an account yet? Sign up.
                </Link>
            </FormWrapper>
        </div>
    )
}