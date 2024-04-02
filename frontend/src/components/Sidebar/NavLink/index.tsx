'use client';

import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import './styles.css';

interface NavLinkProps extends LinkProps {
    title: string;
    icon: React.ReactNode;
    badge?: number;
    shouldMatchExactHref?: boolean;
}

export function NavLink({
    title,
    icon,
    badge,
    shouldMatchExactHref = false,
    ...rest
}: NavLinkProps) {
    const asPath = usePathname();

    let isActive = false;

    if (shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)) {
        isActive = true;
    }

    if (!shouldMatchExactHref && (
        asPath.startsWith(String(rest.href)) ||
        asPath.startsWith(String(rest.as))
    )) {
        isActive = true;
    }

    return (
        <li className={isActive ? 'active' : ''}>
            <Link {...rest}>
                {icon}

                {title}

                {badge && <span className='badge'>{badge}</span>}
            </Link>
        </li>
    );
}
