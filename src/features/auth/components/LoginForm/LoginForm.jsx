import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { Form, Input, Button } from '@/components/ui';
import { validatePassword, validateName } from '../../helpers/validate';
import { PasswordInput } from '../PasswordInput/PasswordInput';
import login from '@/features/auth/services/login';
import { login as loginDispatch } from '../../store/authSlice';

export function LoginForm () {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [ isPending, setIsPending ] = useState(false);

    const [ name, setName ] = useState('');
    const [ isNameError, setIsNameError ] = useState(true);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(true);

    const [ isSubmit, setIsSubmit ] = useState(false);

    function onNameChange(e) {
        setName(e.target.value);
        setIsNameError(!validateName(e.target.value));
    }

    function formValidate() {
        const isNameValid = validateName(name);
        const isPasswordValid = validatePassword(password);

        return isNameValid && isPasswordValid ? true : false;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        setIsSubmit(true);

        if (!formValidate()) return;
        setIsPending(true);

        try {
            const result = await login({ name, password });
            
            if (result.success) {
                dispatch(loginDispatch(result.user));
                navigate('/catalog');
            } else {
                alert(result.message);
            }
        } catch (e) {
            console.error(e)
        } finally {
            setIsPending(false);
        }
    }

    return (
        <Form onSubmit={onSubmitHandler} title='Log in'>
            <Input 
                type='text'
                name='username'
                placeholder='Enter emilys'
                autoFocus
                onChange={onNameChange}
                error={ isNameError && isSubmit ? 'Please enter the name' : '' }
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