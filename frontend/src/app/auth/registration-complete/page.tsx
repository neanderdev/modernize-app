import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Registration Complete',
}

export default function RegistrationCompletePage() {
    return (
        <>
            <div className='complete'>
                <Image
                    src='/mail.png'
                    alt='Mail'
                    width={140}
                    height={140}
                />

                <div className='info'>
                    <h4>Almost There!</h4>

                    <span>Check your email inbox and confirm your account</span>
                </div>
            </div>

            <Separator />

            <footer>
                <span>Didn’t receive any mail?</span>

                <Button
                    type='button'
                    title='Resend Confirmation'
                    buttonSize='large'
                    buttonType='white'
                />
            </footer>
        </>
    );
}
