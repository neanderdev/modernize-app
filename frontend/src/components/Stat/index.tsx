import { ChevronDown, ChevronUp } from 'lucide-react';

import './styles.css';

interface StatProps {
    value: number | string;
    title: string;
    percentage: number;
    type: 'increased' | 'decreased';
    rightIcon?: React.ReactNode;
}

export function Stat({ value, title, type, percentage, rightIcon }: StatProps) {
    return (
        <div className='stat'>
            <div className='stat-info'>
                <h6>{value}</h6>

                <span>{title}</span>

                <span className={type}>
                    {percentage}%

                    {type === 'increased' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                </span>
            </div>

            {
                rightIcon && <div className='icon'>
                    {rightIcon}
                </div>
            }
        </div>
    );
}
