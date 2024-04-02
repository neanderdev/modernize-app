import { Metadata } from 'next';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Confirm Email',
}

export default function ConfirmEmailPage() {
    return (
        <>
            <header>
                <h4>Confirm Email</h4>

                <span>Check Your Email and Enter Confirmation Code</span>
            </header>

            <form>
                <Input
                    label='Confirmation Code'
                    name='confirmation-code'
                    inputSize='large'
                    type='text'
                    id='confirmation-code'
                    placeholder='Enter Code'
                    required
                />

                <Button
                    type='submit'
                    title='Confirm Email'
                    buttonSize='large'
                    buttonType='primary'
                />
            </form>

            <Separator />

            <footer>
                <span>Haven’t received your code?</span>

                <Button
                    type='button'
                    title='Resend Code'
                    buttonSize='large'
                    buttonType='white'
                />
            </footer>
        </>
    );
}
