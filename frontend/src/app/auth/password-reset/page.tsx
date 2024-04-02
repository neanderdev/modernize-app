import { Metadata } from 'next';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Password Reset',
}

export default function PasswordResetPage() {
    return (
        <>
            <header>
                <h4>Password Reset</h4>

                <span>We Will Help You Reset your Password</span>
            </header>

            <form>
                <Input
                    label='Email'
                    name='email'
                    inputSize='large'
                    type='email'
                    id='email'
                    placeholder='Enter Email Address'
                    required
                />

                <Button
                    type='submit'
                    title='Reset Password'
                    buttonSize='large'
                    buttonType='primary'
                />
            </form>

            <Separator />

            <footer>
                <span>Remembered your Password?</span>

                <Button
                    type='button'
                    title='Back to Sign In'
                    buttonSize='large'
                    buttonType='white'
                />
            </footer>
        </>
    );
}
