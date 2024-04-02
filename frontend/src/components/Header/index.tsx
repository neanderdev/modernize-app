'use client';

import {
    Bell,
    ChevronDown,
    Menu,
    MessageSquareText
} from 'lucide-react';
import Image from 'next/image';

import { useSidebar } from '@/contexts/SidebarContext';

import { InputSearch } from '../InputSearch';

import './styles.css';

export function Header() {
    const { handleToggleSidebar } = useSidebar();

    return (
        <header>
            <div>
                <button type='button' className='open-sidebar' onClick={() => handleToggleSidebar()}>
                    <Menu size={32} />
                </button>

                <div className='logo'>
                    <Image
                        src='/logo.svg'
                        alt='Logo'
                        width={40}
                        height={40}
                    />

                    <h4>Modernize</h4>
                </div>
            </div>

            <InputSearch type='search' name='search' placeholder='Search...' />

            <div className='info-user'>
                <button type='button' className='chat-button'>
                    <MessageSquareText size={24} />
                </button>

                <button type='button' className='notifications-button'>
                    <Bell size={24} />

                    <span>5</span>
                </button>

                <button type='button' className='user-button'>
                    <Image
                        src='https://github.com/neanderdev.png'
                        alt='Imagem de perfil'
                        width={40}
                        height={40}
                    />

                    <span>Neander</span>

                    <ChevronDown size={24} />
                </button>
            </div>
        </header>

    );
}
