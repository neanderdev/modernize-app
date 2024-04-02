import { MoveLeft, X } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { DragAndDropUpload } from '@/components/DragAndDropUpload';
import { Input } from '@/components/Input';
import { Select } from '@/components/Select';
import { Separator } from '@/components/Separator';
import { Switch } from '@/components/Switch';
import { Textarea } from '@/components/Textarea';

import './styles.css';

export const metadata: Metadata = {
    title: 'New Product',
}

export default function NewProductPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/products'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Add Product</h5>
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

            <div className='information-and-other-information'>
                <div className='information'>
                    <div className='header-card'>
                        <span>Information</span>
                    </div>

                    <Input
                        label='Product Name'
                        name='product-name'
                        id='product-name'
                        inputSize='medium'
                        type='text'
                        placeholder='Summer T-Shirt'
                    />

                    <Textarea
                        label='Product Description'
                        name='product-description'
                        id='product-description'
                        placeholder='Product Description'
                        textareaSize='medium'
                    />

                    <Separator />

                    <div className='header-card'>
                        <span>Images</span>
                    </div>

                    <DragAndDropUpload
                        fileSize='large'
                    />

                    <Separator />

                    <div className='header-card'>
                        <span>Price</span>
                    </div>

                    <div className='options-form-container'>
                        <Input
                            label='Product Price'
                            name='product-price'
                            id='product-price'
                            inputSize='medium'
                            type='text'
                            placeholder='Enter price'
                        />

                        <Input
                            label='Discount Price'
                            name='discount-price'
                            id='discount-price'
                            inputSize='medium'
                            type='text'
                            placeholder='Price at Discount'
                        />
                    </div>

                    <Switch
                        label='Add tax for this product'
                        name='add-tax-for-this-product'
                        id='add-tax-for-this-product'
                        switchSize='medium'
                    />

                    <Separator />

                    <div className='header-card'>
                        <span>Different Options</span>
                    </div>

                    <Switch
                        label='This product has multiple options'
                        name='this-product-has-multiple-options'
                        id='this-product-has-multiple-options'
                        switchSize='medium'
                        defaultChecked
                    />

                    <div className='header-card'>
                        <span>Option 1</span>
                    </div>

                    <div className='options-form-container'>
                        <Select
                            label='Size'
                            name='size'
                            id='size'
                            selectSize='medium'
                            options={[
                                {
                                    value: '',
                                    title: 'Size'
                                },
                                {
                                    value: 'option-1',
                                    title: 'Option 1'
                                },
                                {
                                    value: 'option-2',
                                    title: 'Option 2'
                                },
                                {
                                    value: 'option-3',
                                    title: 'Option 3'
                                },
                            ]}
                        />

                        <Select
                            label='Value'
                            name='value'
                            id='value'
                            selectSize='medium'
                            options={[
                                {
                                    value: 'S',
                                    title: 'S'
                                },
                                {
                                    value: 'M',
                                    title: 'M'
                                },
                                {
                                    value: 'L',
                                    title: 'L'
                                },
                                {
                                    value: 'XL',
                                    title: 'XL'
                                },
                            ]}
                            multiple
                        />
                    </div>

                    <Link href=''>Add More</Link>

                    <Separator />

                    <div className='header-card'>
                        <span>Shipping</span>
                    </div>

                    <div className='options-form-container'>
                        <Input
                            label='Weight'
                            name='weight'
                            id='weight'
                            inputSize='medium'
                            type='text'
                            placeholder='Enter Weight'
                        />

                        <Select
                            label='Country'
                            name='select-country'
                            id='select-country'
                            selectSize='medium'
                            options={[
                                {
                                    value: '',
                                    title: 'Select Country'
                                },
                                {
                                    value: 'Brazil',
                                    title: 'Brazil'
                                },
                                {
                                    value: 'EUA',
                                    title: 'EUA'
                                },
                                {
                                    value: 'Canada',
                                    title: 'Canada'
                                },
                            ]}
                        />
                    </div>

                    <Switch
                        label='This is digital item'
                        name='this-is-digital-item'
                        id='this-is-digital-item'
                        switchSize='medium'
                    />
                </div>

                <div className='other-information'>
                    <div className='categories'>
                        <div className='header-card'>
                            <span>Categories</span>
                        </div>

                        <div className='list-categories'>
                            <Checkbox
                                label='Women'
                                name='women'
                                id='women'
                            />

                            <Checkbox
                                label='Men'
                                name='men'
                                id='men'
                            />

                            <Checkbox
                                label='T-Shirt'
                                name='t-shirt'
                                id='t-shirt'
                            />

                            <Checkbox
                                label='Hoodie'
                                name='hoodie'
                                id='hoodie'
                            />

                            <Checkbox
                                label='Dress'
                                name='dress'
                                id='dress'
                            />
                        </div>

                        <Link href='/categories/new'>Create New</Link>
                    </div>

                    <div className='tags'>
                        <div className='header-card'>
                            <span>Tags</span>
                        </div>

                        <Input
                            label='Add Tags'
                            name='add-tags'
                            id='add-tags'
                            inputSize='medium'
                            type='text'
                            placeholder='Enter tag name'
                        />

                        <div className='list-tags'>
                            <div className='tag'>
                                <span>T-Shirt</span>

                                <X size={16} />
                            </div>

                            <div className='tag'>
                                <span>Men Clothes</span>

                                <X size={16} />
                            </div>

                            <div className='tag'>
                                <span>Summer Collection</span>

                                <X size={16} />
                            </div>
                        </div>
                    </div>

                    <div className='seo-settings'>
                        <div className='header-card'>
                            <span>SEO Settings</span>
                        </div>

                        <Input
                            label='Title'
                            name='title'
                            id='title'
                            inputSize='medium'
                            type='text'
                        />

                        <Textarea
                            label='Description'
                            name='description'
                            id='description'
                            textareaSize='medium'
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
