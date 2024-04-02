import './styles.css';

interface NavSectionProps {
    title?: string;
    children: React.ReactNode;
}

export function NavSection({ title, children }: NavSectionProps) {
    return (
        <ul>
            {title && <span className='title-nav-section'>{title}</span>}

            {children}
        </ul>
    );
}
