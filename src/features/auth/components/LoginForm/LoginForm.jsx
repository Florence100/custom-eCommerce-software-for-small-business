import { useState } from 'react';
import { Button } from '@/components/ui';
import { Form } from '@/components/ui';
import { validateEmail, validatePassword } from '../../helpers/validate';
import { EmailInput } from '../EmailInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import login from '@/features/auth/services/login';

export function LoginForm () {
    const [ email, setEmail ] = useState('');
    const [ isEmailError, setIsEmailError ] = useState(false);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(false);

    function formValidate() {
        setIsEmailError(!validateEmail(email));
        setIsPasswordError(!validatePassword(password));
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        formValidate();

        if ( isEmailError || isPasswordError) return;

        login({
            email,
            password
        })
    }

    return (
        <Form onSubmit={onSubmitHandler} title='Log in'>
            <EmailInput
                isError={isEmailError} 
                setIsError={setIsEmailError}
                setEmail={setEmail}
            />
            <PasswordInput 
                isError={isPasswordError}
                setError={setIsPasswordError}
                setPassword={setPassword}
            />
            <Button type='submit' style={{ width: '100%' }}>Log in</Button>
        </Form>
    )
}