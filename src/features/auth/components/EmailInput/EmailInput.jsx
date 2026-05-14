import { Input } from '@/components/ui';
import { validateEmail } from '../../helpers/validate';
import emailIcon from '@/assets/images/icons/email.svg';
import './EmailInput.css';

export function EmailInput({ setEmail, isError, setIsError, isSubmit }) {
    function onChange(e) {
        setEmail(e.target.value);
        setIsError(!validateEmail(e.target.value));
    }

    return (
        <Input 
            type='email'
            name='email'
            placeholder='Email'
            icon={<img src={emailIcon} alt='email icon' />}
            onChange={ onChange }
            error={ isError && isSubmit ? 'Please enter a correct email' : '' }
            className='email-input'
        />
    )
}