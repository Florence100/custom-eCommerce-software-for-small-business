import { Link } from 'react-router';
import { Input } from '../../../../components/ui';
import { Button } from '../../../../components/ui';
import { Form } from '../../../../components/ui';
import login from '../../services/login';
import emailIcon from '@/assets/images/icons/email.svg';
import lockIcon from '@/assets/images/icons/lock.svg';

export function LoginForm () {
    return (
        <Form action={ login } title='Log in'>
            <Input 
                type='email' 
                name='email' 
                placeholder='Email' 
                autoFocus 
                icon={<img src={emailIcon} alt="" style={{ height: '100%'}} />} 
                style={{ paddingLeft: '2.75rem' }}
            />
            <Input 
                type='password' 
                name='password' 
                placeholder='Password' 
                icon={<img src={lockIcon} alt="" style={{ height: '100%'}} />} 
                style={{ paddingLeft: '2.75rem' }} 
            />
            <Button type='submit' style={{ width: '100%' }}>Log in</Button>
        </Form>
    )
}