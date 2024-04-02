import { Paperclip, Plus, Settings, User, Video } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { InputSearch } from '@/components/InputSearch';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'Inbox',
}

export default function InboxPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Inbox</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='New Message'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='inbox'>
                <div className='conversations'>
                    <div className='conversations-header'>
                        <div className='header-card'>
                            <span>Conversations</span>
                        </div>

                        <InputSearch
                            type='search'
                            name='search'
                            placeholder='Search...'
                            outline
                        />
                    </div>

                    <div className='contacts'>
                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />

                                <div className='online'></div>
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='notifications'>8</span>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact active'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />

                                <div className='online'></div>
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='notifications'>5</span>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>

                        <div className='contact'>
                            <div className='avatar-user'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={48}
                                    height={48}
                                />
                            </div>

                            <div className='contact-info'>
                                <div className='contact-info-header'>
                                    <strong>Neander de Souza</strong>

                                    <span className='time'>12:24 AM</span>
                                </div>

                                <p>Hello, I’m interested in this item teste teste teste</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='chat'>
                    <div className='chat-header'>
                        <div className='info-user-chat'>
                            <strong>Neander de Souza</strong>

                            <div className='online'></div>
                        </div>

                        <div className='actions-button-chat'>
                            <button className='button-info-user' type='button'>
                                <User size={24} />
                            </button>

                            <button className='button-call-video' type='button'>
                                <Video size={24} />
                            </button>

                            <button className='button-config-chat' type='button'>
                                <Settings size={24} />
                            </button>
                        </div>
                    </div>

                    <Separator />

                    <div className='chat-messages'>
                        <div className='chat-message to'>
                            <Image
                                src='https://github.com/neanderdev.png'
                                alt='Neander de Souza'
                                width={36}
                                height={36}
                            />

                            <div className='message-info'>
                                <p>
                                    Hi, I wonder when if there is going to be anything new for
                                    spring?
                                </p>

                                <span>12:24 AM</span>
                            </div>
                        </div>

                        <div className='chat-message me'>
                            <Image
                                src='https://github.com/neanderdev.png'
                                alt='Neander de Souza'
                                width={36}
                                height={36}
                            />

                            <div className='message-info'>
                                <p>Hi Luis, can you please be more specific?</p>

                                <span>12:31 AM</span>
                            </div>
                        </div>

                        <div className='chat-message to'>
                            <Image
                                src='https://github.com/neanderdev.png'
                                alt='Neander de Souza'
                                width={36}
                                height={36}
                            />

                            <div className='message-info'>
                                <p>
                                    Sure, I want to know when the new spring collection for men
                                    is coming
                                </p>

                                <span>12:35 AM</span>
                            </div>
                        </div>

                        <div className='chat-message me'>
                            <Image
                                src='https://github.com/neanderdev.png'
                                alt='Neander de Souza'
                                width={36}
                                height={36}
                            />

                            <div className='message-info'>
                                <p>
                                    Thank you for taking interest in our upcoming products. You
                                    can have a look at the upcoming colection in our blog post.
                                </p>

                                <span>12:45 AM</span>
                            </div>
                        </div>

                        <div className='chat-message me'>
                            <Image
                                src='https://github.com/neanderdev.png'
                                alt='Neander de Souza'
                                width={36}
                                height={36}
                            />

                            <div className='message-info'>
                                <div className='images'>
                                    <Image
                                        src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
                                        alt='Men White T-Shirt'
                                        width={96}
                                        height={96}
                                    />

                                    <Image
                                        src='https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f'
                                        alt='Women Red T-Shirt'
                                        width={96}
                                        height={96}
                                    />
                                </div>

                                <span>12:45 AM</span>
                            </div>
                        </div>
                    </div>

                    <Separator />

                    <div className='message-send'>
                        <input type='text' name='message' placeholder='Your message...' />

                        <div className='actions-button-message-send'>
                            <button className='send-file' type='button'>
                                <Paperclip size={24} />
                            </button>

                            <Button
                                type='button'
                                title='Send'
                                buttonType='primary'
                                buttonSize='medium'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
