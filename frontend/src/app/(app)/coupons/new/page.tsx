import { Banknote, MoveLeft, ShoppingBag, Tag, Truck } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Separator } from '@/components/Separator';

import './styles.css';

export const metadata: Metadata = {
    title: 'New Coupons',
}

export default function NewCouponsPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/coupons'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Create Coupon</h5>
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

            <div className='new-coupon'>
                <div className='header-card'>
                    <div className='title-description'>
                        <span>Coupon Information</span>

                        <p>Code will be used by users in checkout</p>
                    </div>
                </div>

                <div className='options-form-container'>
                    <Input
                        label='Coupon Code'
                        name='coupon-code'
                        id='coupon-code'
                        inputSize='medium'
                        type='text'
                        placeholder='Shipfree20'
                    />

                    <Input
                        label='Coupon Name'
                        name='coupon-name'
                        id='coupon-name'
                        inputSize='medium'
                        type='text'
                        placeholder='Free Shipping'
                    />
                </div>

                <Separator />

                <div className='header-card'>
                    <div className='title-description'>
                        <span>Coupon Type</span>

                        <p>Type of coupon you want to create</p>
                    </div>
                </div>

                <div className='radio-buttons-container'>
                    <label className='radio-button-wrapper'>
                        <input type='radio' name='coupon-type' defaultChecked />

                        <div className='radio-button-box'>
                            <Banknote size={24} />

                            <span>Fixed Discount</span>
                        </div>
                    </label>

                    <label className='radio-button-wrapper'>
                        <input type='radio' name='coupon-type' />

                        <div className='radio-button-box'>
                            <ShoppingBag size={24} />

                            <span>Percentage Discount</span>
                        </div>
                    </label>

                    <label className='radio-button-wrapper'>
                        <input type='radio' name='coupon-type' />

                        <div className='radio-button-box'>
                            <Truck size={24} />

                            <span>Free Shipping</span>
                        </div>
                    </label>

                    <label className='radio-button-wrapper'>
                        <input type='radio' name='coupon-type' />

                        <div className='radio-button-box'>
                            <Tag size={24} />

                            <span>Price Discount</span>
                        </div>
                    </label>
                </div>

                <div className='options-form-container'>
                    <Input
                        label='Discount Value'
                        name='discount-value'
                        id='discount-value'
                        inputSize='medium'
                        type='text'
                        placeholder='Amount'
                    />

                    <Select
                        label='Applies to'
                        name='select-applies-to'
                        id='select-applies-to'
                        selectSize='medium'
                        options={[
                            {
                                value: '',
                                title: 'Choose'
                            },
                            {
                                value: 'product-1',
                                title: 'Product 1'
                            },
                            {
                                value: 'product-2',
                                title: 'Product 2'
                            },
                            {
                                value: 'product-3',
                                title: 'Product 3'
                            },
                        ]}
                    />
                </div>

                <div className='options-form-container'>
                    <div className='input-and-checkbox'>
                        <Input
                            label='Duration'
                            name='duration'
                            id='duration'
                            inputSize='medium'
                            type='text'
                            placeholder='Set Duration'
                        />

                        <Checkbox
                            label='Don`t set duration'
                            name='dont-set-duration'
                            id='dont-set-duration'
                        />
                    </div>

                    <div className='input-and-checkbox'>
                        <Input
                            label='Usage Limits'
                            name='usage-limits'
                            id='usage-limits'
                            inputSize='medium'
                            type='text'
                            placeholder='Amount of uses'
                        />

                        <Checkbox
                            label='Don`t limit amount of uses'
                            name='dont-limit-amount-of-uses'
                            id='dont-limit-amount-of-uses'
                        />
                    </div>
                </div>
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
