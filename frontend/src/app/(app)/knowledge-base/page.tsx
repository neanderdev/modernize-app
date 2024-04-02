import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { InputSearch } from '@/components/InputSearch';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Knowledge Base',
}

export default function KnowledgeBasePage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Knowledge Base</h5>
            </div>

            <InputSearch
                type='search'
                name='search'
                placeholder='Search...'
                outline
            />

            <div className='knowledges'>
                <div className='knowledge'>
                    <Image
                        src='/pages.png'
                        alt='Pages Image'
                        width={100}
                        height={100}
                    />

                    <strong>Getting Started</strong>

                    <span>Guide to get started faster</span>

                    <span>Video tutorials for beginners</span>

                    <span>Moving to Bolt system</span>

                    <Link href=''>More Tutorials</Link>
                </div>

                <div className='knowledge'>
                    <Image
                        src='/users.png'
                        alt='Users Image'
                        width={100}
                        height={100}
                    />

                    <strong>Personal Settings</strong>

                    <span>Setting up your profile</span>

                    <span>Changing business name</span>

                    <span>Changing email address</span>

                    <Link href=''>More Tutorials</Link>
                </div>

                <div className='knowledge'>
                    <Image
                        src='/credit-card.png'
                        alt='Credit Card Image'
                        width={100}
                        height={100}
                    />

                    <strong>Billing</strong>

                    <span>Payment declined</span>

                    <span>Get a refund</span>

                    <span>Subscriptions</span>

                    <Link href=''>More Tutorials</Link>
                </div>

                <div className='knowledge'>
                    <Image
                        src='/statistics.png'
                        alt='Statistics Image'
                        width={100}
                        height={100}
                    />

                    <strong>Commerce</strong>

                    <span>Add products</span>

                    <span>Selling guide</span>

                    <span>Create categories</span>

                    <Link href=''>More Tutorials</Link>
                </div>
            </div>

            <div className='knowledge-others'>
                <div className='knowledge'>
                    <strong>Community Forum</strong>

                    <span>Get help from community members, ask any questions and get answers faster.</span>

                    <Link href=''>Join Community</Link>
                </div>

                <div className='knowledge'>
                    <strong>Webinars</strong>

                    <span>Join our series of webinars where you can ask questions live and see a presentation.</span>

                    <Link href=''>Register</Link>
                </div>
            </div>

            <Separator />

            <div className='questions'>
                <h6>Still Need Help?</h6>

                <span>Get in touch with us and we will be happy to help you out!</span>

                <Button
                    type='button'
                    title='Contact Support'
                    buttonSize='medium'
                    buttonType='primary'
                />
            </div>
        </>
    );
}
