import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Input } from '@/components/ui';
import { Button } from '@/components/ui';
import { Form } from '@/components/ui';
import register from '@/features/auth/services/register';
import { validateEmail, validatePassword, validateName } from '../../helpers/validate';
import { EmailInput } from '../EmailInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';

export function RegisterForm () {
    const navigate = useNavigate();

    const [ firstName, setFirstName ] = useState('');
    const [ isFirstNameError, setIsFirstNameError ] = useState(true);

    const [ lastName, setLastName ] = useState('');
    const [ isLastNameError, setIsLastNameError ] = useState(true);

    const [ email, setEmail ] = useState('');
    const [ isEmailError, setIsEmailError ] = useState(true);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(true);

    const [ isSubmit, setIsSubmit ] = useState(false);
    const [ isPending, setIsPending ] = useState(false);

    function formValidate() {
        const isFirstNameValid = validateName(firstName);
        const isLastNameValid = validateName(lastName);
        const isEmailValid = validateEmail(email);
        const isPasswordValid = validatePassword(password);

        return isFirstNameValid && isLastNameValid && isEmailValid && isPasswordValid ? true : false;
    }

    async function onSubmitHandler(e) {
        e.preventDefault();
        setIsSubmit(true);
        
        if (!formValidate()) return;

        setIsPending(true);

        try {
            const result = await register({
                firstName,
                lastName,
                email,
                password
            })
            if (result.success) {
                navigate('/login');
            } else {
                alert(result.message);
            }
        } catch (e) {
            console.error('Registration failed', e);
        } finally {
            setIsPending(false);
        }
    }

    function onFirstNameChange(e) {
        setFirstName(e.target.value);
        setIsFirstNameError(!validateName(e.target.value));
    }

    function onLastNameChange(e) {
        setLastName(e.target.value);
        setIsLastNameError(!validateName(e.target.value));
    }

    return (
        <Form onSubmit={onSubmitHandler} title='Sing up'>
            <Input 
                type='text'
                name='first-name'
                placeholder='First Name'
                autoFocus
                onChange={ onFirstNameChange }
                error={ isFirstNameError && isSubmit ? 'Please enter the first name' : '' }
            />
            <Input 
                type='text'
                name='last-name'
                placeholder='Last Name'
                onChange={ onLastNameChange }
                error={ isLastNameError && isSubmit ? 'Please enter the last name' : '' }
            />
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
            <Button type='submit' style={{ width: '100%' }} disabled={ isPending }>Continue</Button>
        </Form>
    )
}