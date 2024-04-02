import { EllipsisVertical, MoveLeft, PencilLine, Plus, Trash } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/Button';
import { DragAndDropUpload } from '@/components/DragAndDropUpload';
import { Input } from '@/components/Input';
import { Separator } from '@/components/Separator';
import { Switch } from '@/components/Switch';

import './styles.css';

export const metadata: Metadata = {
    title: 'New Category',
}

const productsCategory = [
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
    {
        urlImagem: 'https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0',
        name: 'Women Striped T-Shirt',
    },
];

export default function NewCategoryPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/categories'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Women Clothes</h5>
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

            <div className='products-and-category-info-container'>
                <div className='products'>
                    <strong>Products <span>12</span></strong>

                    <div className='list-products'>
                        {productsCategory.map((product, index) => (
                            <div key={index} className='product'>
                                <div className='product-info'>
                                    <EllipsisVertical size={24} />

                                    <Image
                                        src={product.urlImagem}
                                        alt={product.name}
                                        width={48}
                                        height={48}
                                    />

                                    <span>{product.name}</span>
                                </div>

                                <div className='actions-buttons'>
                                    <button type='button' className='edit-product-category'>
                                        <PencilLine size={24} />
                                    </button>

                                    <button type='button' className='delete-product-category'>
                                        <Trash size={24} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Button
                        type='button'
                        title='Add Product'
                        leftIcon={<Plus size={24} />}
                        buttonType='white'
                        buttonSize='medium'
                    />
                </div>

                <div className='category-info-container'>
                    <div className='category-visibility'>
                        <div className='header-card'>
                            <span>Category Visibility</span>
                        </div>

                        <Switch
                            label='Visible on site'
                            name='visible-on-site'
                            id='visible-on-site'
                            switchSize='medium'
                        />
                    </div>

                    <div className='category-info'>
                        <div className='header-card'>
                            <span>Category Info</span>
                        </div>

                        <Input
                            type='text'
                            name='category-name'
                            id='category-name'
                            label='Category Name'
                            inputSize='medium'
                            placeholder='Category Name'
                        />

                        <DragAndDropUpload
                            fileSize='small'
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
