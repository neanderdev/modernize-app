import { InputHTMLAttributes } from 'react';

import './styles.css';

interface InputProps extends InputHTMLAttributes<any> {
    label?: string;
    name: string;
    inputSize: 'small' | 'medium' | 'large';
}

export function Input({ label, name, inputSize, ...rest }: InputProps) {
    return (
        <div className='input-wrapper'>
            {label && <label htmlFor={name}>{label}</label>}

            <input
                className={inputSize}
                name={name}
                {...rest}
            />
        </div>
    );
}
