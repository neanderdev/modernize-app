import { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonProps extends ButtonHTMLAttributes<any> {
    title?: string;
    buttonSize: 'small' | 'medium' | 'large';
    buttonType: 'primary' | 'secondary' | 'destructive' | 'destructive-secondary' | 'white';
    leftIcon?: React.ReactNode;
}

export function Button({ title, buttonType, buttonSize, leftIcon, ...rest }: ButtonProps) {
    return (
        <button
            className={`btn ${buttonSize} ${buttonType}`}
            {...rest}
        >
            {leftIcon && leftIcon}

            {title && title}
        </button>
    );
}

