import './styles.css';

interface BadgeProps {
    title: string;
    type: 'paid' | 'pending' | 'expired' | 'active' | 'completed' | 'ready' | 'shipped' | 'received' | 'increase';
}

export function Badge({ title, type }: BadgeProps) {
    return <span className={`badge ${type}`}>{title}</span>
}
