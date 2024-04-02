import { MoveLeft } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Separator } from '@/components/Separator';
import { Textarea } from '@/components/Textarea';

import './styles.css';

export const metadata: Metadata = {
    title: 'New Customer',
}

export default function NewCustomerPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/customers'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Add Costumer</h5>
                </div>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Cancel'
                        buttonType='white'
                        buttonSize='medium'
                    />

                    <Button
                        type='button'
                        title='Save'
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='new-costumer'>
                <div className='header-card'>
                    <div className='title-description'>
                        <span>Customer Information</span>

                        <p>Most important information about the customer</p>
                    </div>
                </div>

                <div className='options-form-container'>
                    <Input
                        label='First Name'
                        name='first-name'
                        id='first-name'
                        inputSize='medium'
                        type='text'
                        placeholder='First Name'
                    />

                    <Input
                        label='Last Name'
                        name='last-name'
                        id='last-name'
                        inputSize='medium'
                        type='text'
                        placeholder='Last Name'
                    />
                </div>

                <div className='options-form-container'>
                    <Input
                        label='Email Address'
                        name='email-address'
                        id='email-address'
                        inputSize='medium'
                        type='email'
                        placeholder='Email Address'
                    />

                    <Input
                        label='Phone Number'
                        name='phone-number'
                        id='phone-number'
                        inputSize='medium'
                        type='text'
                        placeholder='Phone Number'
                    />
                </div>

                <Separator />

                <div className='header-card'>
                    <div className='title-description'>
                        <span>Customer Address</span>

                        <p>Shipping address information</p>
                    </div>
                </div>

                <div className='options-form-container'>
                    <Input
                        label='Address'
                        name='address'
                        id='address'
                        inputSize='medium'
                        type='text'
                        placeholder='Address'
                    />

                    <Input
                        label='Apartment'
                        name='apartment'
                        id='apartment'
                        inputSize='medium'
                        type='text'
                        placeholder='Apartment'
                    />
                </div>

                <div className='options-form-container'>
                    <Input
                        label='City'
                        name='city'
                        id='city'
                        inputSize='medium'
                        type='text'
                        placeholder='City'
                    />

                    <div className='options-form-container'>
                        <Select
                            label='Country'
                            name='select-country'
                            id='select-country'
                            selectSize='medium'
                            options={[
                                {
                                    value: '',
                                    title: 'Choose'
                                },
                                {
                                    value: 'SP',
                                    title: 'São Paulo'
                                },
                                {
                                    value: 'RJ',
                                    title: 'Rio de Janeiro'
                                },
                                {
                                    value: 'MG',
                                    title: 'Minas Gerais'
                                },
                            ]}
                        />

                        <Input
                            label='Postal Code'
                            name='postal-code'
                            id='postal-code'
                            inputSize='medium'
                            type='text'
                            placeholder='Postal Code'
                        />
                    </div>
                </div>

                <div className='options-form-container'>
                    <Input
                        label='Phone'
                        name='phone'
                        id='phone'
                        inputSize='medium'
                        type='text'
                        placeholder='Phone'
                    />
                </div>

                <Separator />

                <div className='header-card'>
                    <div className='title-description'>
                        <span>Customer Notes</span>

                        <p>Add notes about customer</p>
                    </div>
                </div>

                <Textarea
                    label='Notes'
                    name='notes'
                    id='notes'
                    placeholder='Add notes about customer'
                    textareaSize='medium'
                />
            </div>

            <Separator />

            <div className='actions-bottom'>
                <Button
                    type='button'
                    title='Cancel'
                    buttonType='white'
                    buttonSize='medium'
                />

                <Button
                    type='button'
                    title='Save'
                    buttonType='primary'
                    buttonSize='medium'
                />
            </div>
        </>
    );
}
