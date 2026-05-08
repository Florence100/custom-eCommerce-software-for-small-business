import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router';
import { Button } from '@/components/ui';
import { Form } from '@/components/ui';
import { validateEmail, validatePassword } from '../../helpers/validate';
import { EmailInput } from '../EmailInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import login from '@/features/auth/services/login';
import { login as loginDispatch } from '../../store/authSlice';

export function LoginForm () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ isPending, setIsPending ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ isEmailError, setIsEmailError ] = useState(true);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(true);

    const [ isSubmit, setIsSubmit ] = useState(false);

    function formValidate() {
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        return isEmailValid && isPasswordValid ? true : false;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        setIsSubmit(true);

        if (!formValidate()) return;
        setIsPending(true);

        try {
            const result = await login({ email, password });
            
            if (result.success) {
                dispatch(loginDispatch({ email: email }));
                navigate('/catalog');
            } else {
                alert(result.message);
            }
        } catch (e) {
            console.error(e, )
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Form onSubmit={onSubmitHandler} title='Log in'>
            <EmailInput
                isError={isEmailError} 
                setIsError={setIsEmailError}
                setEmail={setEmail}
                isSubmit={isSubmit}
            />
            <PasswordInput 
                isError={isPasswordError}
                setError={setIsPasswordError}
                setPassword={setPassword}
                isSubmit={isSubmit}
            />
            <Button type='submit' style={{ width: '100%' }} disabled={ isPending }>Log in</Button>
        </Form>
    )
}