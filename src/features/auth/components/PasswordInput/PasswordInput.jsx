import { useState } from 'react';
import { validatePassword } from '../../helpers/validate';
import { Input } from '@/components/ui';
import closeEyeIcon from '@/assets/images/icons/eye-close.svg';
import openEyeIcon from '@/assets/images/icons/eye-open.svg';
import './PasswordInput.css';

export function PasswordInput({ setPassword, isError, setError, isSubmit }) {
    const [ isShowedPassword, setIsShowedPassword ] = useState(false);

    function togglePasswordVisible(e) {
        e.preventDefault();
        isShowedPassword ? setIsShowedPassword(false) : setIsShowedPassword(true);
    }

    function onPasswordChange(e) {
        setPassword(e.target.value);
        setError(!validatePassword(e.target.value));
    }

    return (
        <div className='password-input'>
            <Input 
                type={ isShowedPassword ? 'text' : 'password' }
                name='password' 
                placeholder='Enter emilyspass' 
                onChange={ onPasswordChange }
                error={ isError && isSubmit ? 'Please enter a password longer than 8 characters' : '' }
            />
            <button
                onClick={togglePasswordVisible}
                aria-label={isShowedPassword ? 'Hide password' : 'Show password'}
            >
                <img
                    src={ isShowedPassword ? openEyeIcon : closeEyeIcon }
                    alt="Icon"
                    onClick={togglePasswordVisible}
                />
            </button>
        </div>
    )
}