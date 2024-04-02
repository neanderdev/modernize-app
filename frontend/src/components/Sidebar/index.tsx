'use client';

import {
    AreaChart,
    Bookmark,
    Folder,
    HelpCircle,
    Home,
    List,
    MessageSquareText,
    Settings,
    Star,
    Tag,
    User,
    Users,
    X
} from 'lucide-react';

import { useSidebar } from '@/contexts/SidebarContext';

import { Button } from '@/components/Button';

import { NavLink } from './NavLink';
import { NavSection } from './NavSection';

import './styles.css';

export function Sidebar() {
    const { handleToggleSidebar, openSidebar } = useSidebar();

    return (
        <aside
            style={
                openSidebar
                    ? {
                        height: '100vh',
                        marginLeft: 0,
                        display: 'block',
                        backgroundColor: '#ffffff',
                        zIndex: 1,
                        overflowY: 'scroll',
                        animationName: 'showSidebar'
                    }
                    : {}
            }
        >
            <button type='button' className='close-sidebar' onClick={() => handleToggleSidebar()}>
                <X size={32} />
            </button>

            <div className='links'>
                <NavSection>
                    <NavLink
                        title='Dashboard'
                        icon={<Home size={20} />}
                        href='/dashboard'
                    />

                    <NavLink
                        title='Orders'
                        icon={<List size={20} />}
                        href='/orders'
                        badge={16}
                    />

                    <NavLink
                        title='Products'
                        icon={<Tag size={20} />}
                        href='/products'
                    />

                    <NavLink
                        title='Categories'
                        icon={<Folder size={20} />}
                        href='/categories'
                    />

                    <NavLink
                        title='Customers'
                        icon={<Users size={20} />}
                        href='/customers'
                    />

                    <NavLink
                        title='Reports'
                        icon={<AreaChart size={20} />}
                        href='/reports'
                    />

                    <NavLink
                        title='Coupons'
                        icon={<Star size={20} />}
                        href='/coupons'
                    />

                    <NavLink
                        title='Inbox'
                        icon={<MessageSquareText size={20} />}
                        href='/inbox'
                    />
                </NavSection>

                <NavSection title='Other Information'>
                    <NavLink
                        title='Knowledge Base'
                        icon={<HelpCircle size={20} />}
                        href='/knowledge-base'
                    />

                    <NavLink
                        title='Product Updates'
                        icon={<Bookmark size={20} />}
                        href='/product-updates'
                    />
                </NavSection>

                <NavSection title='Settings'>
                    <NavLink
                        title='Personal Settings'
                        icon={<User size={20} />}
                        href='/personal-settings'
                    />

                    <NavLink
                        title='Global Settings'
                        icon={<Settings size={20} />}
                        href='/global-settings'
                    />
                </NavSection>
            </div>

            <div className='banner'>
                <span>Grow Business</span>

                <p>Explore our marketing solutions</p>

                <Button
                    type='button'
                    title='Read More'
                    buttonType='white'
                    buttonSize='small'
                />
            </div>
        </aside>
    );
}
