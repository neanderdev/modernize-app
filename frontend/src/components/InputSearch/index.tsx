import { Search } from 'lucide-react';
import { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<any> {
    outline?: boolean;
}

export function InputSearch({ outline = false, ...rest }: InputProps) {
    return (
        <div className='search-wrapper'>
            <input
                className={`input-search ${outline ? 'outline' : ''}`}
                {...rest}
            />

            <Search size={20} />
        </div>
    );
}

