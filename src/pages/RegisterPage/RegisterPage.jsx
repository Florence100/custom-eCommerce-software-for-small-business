import { Link } from 'react-router';
import { RegisterForm } from '@/features/auth';
import { FormWrapper } from '@/components/layouts';

export function RegisterPage () {
    return (
        <FormWrapper>
            <RegisterForm />
            <Link className='link text-center' to='/login'>
                Already have an account? Log in!
            </Link>
        </FormWrapper>
    )
}