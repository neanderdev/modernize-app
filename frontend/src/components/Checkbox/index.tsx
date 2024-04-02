import { InputHTMLAttributes } from 'react';

import './styles.css';

interface CheckboxProps extends InputHTMLAttributes<any> {
    label?: string;
    name: string;
}

export function Checkbox({ label, name, ...rest }: CheckboxProps) {
    return (
        <div className='checkbox-wrapper'>
            <input
                type='checkbox'
                name={name}
                {...rest}
            />

            {label && <label htmlFor={name}>{label}</label>}
        </div>
    );
}
