import { TextareaHTMLAttributes } from 'react';

import './styles.css';

interface TextareaProps extends TextareaHTMLAttributes<any> {
    label?: string;
    name: string;
    textareaSize: 'small' | 'medium' | 'large';
}

export function Textarea({ label, name, textareaSize, ...rest }: TextareaProps) {
    return (
        <div className='textarea-wrapper'>
            {label && <label htmlFor={name}>{label}</label>}

            <textarea
                className={textareaSize}
                name={name}
                {...rest}
            ></textarea>
        </div>
    );
}
