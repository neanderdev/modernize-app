import { InputHTMLAttributes } from 'react';

import './styles.css';

interface SwitchProps extends InputHTMLAttributes<any> {
    label?: string;
    labelLeftTitle?: string;
    labelLeftDescription?: string;
    name: string;
    switchSize: 'small' | 'medium' | 'large';
}

export function Switch({ label, labelLeftTitle, labelLeftDescription, name, switchSize, ...rest }: SwitchProps) {
    return (
        <div className='switch-wrapper'>
            {labelLeftTitle && labelLeftDescription
                && <div className='switch-label'>
                    <span className='switch-label-title'>{labelLeftTitle}</span>

                    <p className='switch-label-description'>{labelLeftDescription}</p>
                </div>
            }

            <label className={`switch ${switchSize}`}>
                <input
                    type='checkbox'
                    name={name}
                    {...rest}
                />

                <span className={`switch-slider ${switchSize}`}></span>
            </label>

            {label && <span>{label}</span>}
        </div>
    );
}
