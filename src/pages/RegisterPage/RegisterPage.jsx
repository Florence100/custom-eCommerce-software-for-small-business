import { Link } from 'react-router';
import { RegisterForm } from '@/features/auth';
import { FormWrapper } from '@/components/ui';

export function RegisterPage () {
    return (
        <div>
            <FormWrapper>
                <RegisterForm />
                <Link className='link text-center' to='/login'>
                    Already have an account? Log in!
                </Link>
            </FormWrapper>
        </div>
    )
}