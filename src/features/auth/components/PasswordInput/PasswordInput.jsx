import { useState } from 'react';
import { validatePassword } from '../../helpers/validate';
import { Input } from '@/components/ui';
import closeEyeIcon from '@/assets/images/icons/eye-close.svg';
import openEyeIcon from '@/assets/images/icons/eye-open.svg';

export function PasswordInput({ setPassword, isError, setError, isSubmit }) {
    const [ isShowPassword, setIsShowPassword ] = useState(false);

    function togglePasswordVisible() {
        isShowPassword ? setIsShowPassword(false) : setIsShowPassword(true);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
        setError(!validatePassword(e.target.value));
    }

    return (
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
                />
            } 
            style={{ paddingLeft: '2.75rem' }}
            onChange={ onPasswordChange }
            error={ isError && isSubmit ? 'Please enter a password longer than 8 characters' : '' }
        />
    )
}