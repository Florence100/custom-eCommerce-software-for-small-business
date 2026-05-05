import { useState } from 'react';
import { Input } from '@/components/ui';
import { Button } from '@/components/ui';
import { Form } from '@/components/ui';
import login from '@/features/auth/services/login';
import emailIcon from '@/assets/images/icons/email.svg';
// import lockIcon from '@/assets/images/icons/lock.svg';
import closeEyeIcon from '@/assets/images/icons/eye-close.svg';
import openEyeIcon from '@/assets/images/icons/eye-open.svg';
import { validateEmail, validatePassword } from '../../helpers/validate';

export function LoginForm () {
    const [ email, setEmail ] = useState('');
    const [ isEmailError, setIsEmailError ] = useState(false);

    const [ password, setPassword ] = useState('');
    const [ isPasswordError, setIsPasswordError ] = useState(false);
    const [ isShowPassword, setIsShowPassword ] = useState(false);

    function togglePasswordVisible() {
        isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
    }

    return (
        <Form action={ login } title='Log in'>
            <Input 
                type='email' 
                name='email' 
                placeholder='Email' 
                autoFocus 
                icon={<img src={emailIcon} alt="" style={{ height: '100%'}} />} 
                style={{ paddingLeft: '2.75rem' }}
                onBlur={() => {
                    setIsEmailError(!validateEmail(email))
                }}
                onChange={e => setEmail(e.target.value)}
                error={ isEmailError ? 'Please enter a correct email' : '' }
            />
            <Input 
                type={ isShowPassword ? 'text' : 'password' }
                name='password' 
                placeholder='Password' 
                icon={
                    <img 
                        src={ isShowPassword ? openEyeIcon : closeEyeIcon } 
                        alt="" 
                        style={{ height: '100%', cursor: 'pointer' }}
                        onClick={togglePasswordVisible}
                    ></img>
                } 
                style={{ paddingLeft: '2.75rem' }}
                onBlur={() => {
                    setIsPasswordError(!validatePassword(password))
                }}
                onChange={e => setPassword(e.target.value)}
                error={ isPasswordError ? 'Please enter a password longer than 8 characters' : '' }
            />
            <Button type='submit' style={{ width: '100%' }}>Log in</Button>
        </Form>
    )
}