import { SelectHTMLAttributes } from 'react';

import './styles.css';

interface SelectProps extends SelectHTMLAttributes<any> {
    label?: string;
    name: string;
    selectSize: 'small' | 'medium' | 'large';
    options: {
        value: string;
        title: string;
    }[];
}

export function Select({ label, name, selectSize, options, ...rest }: SelectProps) {
    return (
        <div className='select-wrapper'>
            {label && <label htmlFor={name}>{label}</label>}

            <select
                className={selectSize}
                name={name}
                {...rest}
            >
                {options.map((option, index) => (
                    <option
                        key={index}
                        value={option.value}
                    >
                        {option.title}
                    </option>
                ))}
            </select>
        </div>
    );
}
