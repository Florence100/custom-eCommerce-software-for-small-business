import { useState } from 'react';
import { Input } from '@/components/ui';
import { Button } from '@/components/ui';
import { Form } from '@/components/ui';
import register from '@/features/auth/services/register';
import { validateEmail, validatePassword, validateName } from '../../helpers/validate';
import { EmailInput } from '../EmailInput/EmailInput';
import { PasswordInput } from '../PasswordInput/PasswordInput';

export function RegisterForm () {
    const [ firstName, setFirstName ] = useState('');
    const [ isFirstNameError, setIsFirstNameError ] = useState(false);

    const [ lastName, setLastName ] = useState('');
    const [ isLastNameError, setIsLastNameError ] = useState(false);

    const [ email, setEmail ] = useState('');
    const [ isEmailError, setIsEmailError ] = useState(false);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(false);

    function formValidate() {
        setIsFirstNameError(!validateName(firstName));
        setIsLastNameError(!validateName(lastName));
        setIsEmailError(!validateEmail(email));
        setIsPasswordError(!validatePassword(password));
    }

    function onSubmitHandler(e) {
        e.preventDefault();
        formValidate();

        if (isFirstNameError || isLastNameError || isEmailError || isPasswordError) return;

        register({
            firstName,
            lastName,
            email,
            password
        })
    }

    function onFirstNameChange(e) {
        setFirstName(e.target.value);
        if (isFirstNameError) setIsFirstNameError(!validateName(e.target.value));
    }

    function onLastNameChange(e) {
        setLastName(e.target.value);
        if (isLastNameError) setIsLastNameError(!validateName(e.target.value));
    }

    return (
        <Form onSubmit={onSubmitHandler} title='Sing up'>
            <Input 
                type='text'
                name='first-name'
                placeholder='First Name'
                autoFocus
                onChange={ onFirstNameChange }
                error={ isFirstNameError ? 'Please enter the first name' : '' }
            />
            <Input 
                type='text'
                name='last-name'
                placeholder='Last Name'
                onChange={ onLastNameChange }
                error={ isLastNameError ? 'Please enter the last name' : '' }
            />
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
            <Button type='submit' style={{ width: '100%' }}>Continue</Button>
        </Form>
    )
}