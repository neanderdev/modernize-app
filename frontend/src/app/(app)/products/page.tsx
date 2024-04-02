import { PencilLine, Plus, Trash } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { InputSearch } from '@/components/InputSearch';
import { Pagination } from '@/components/Pagination';

import './styles.css';

export const metadata: Metadata = {
    title: 'Products',
}

export default function ProductsPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Products</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Export'
                        buttonType='white'
                        buttonSize='medium'
                    />

                    <Button
                        type='button'
                        title='Add Product'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='products'>
                <div className='header-card'>
                    <div className='filters'>
                        <select name='filter-products'>
                            <option value=''>Filter</option>

                            <option value='option-1'>Option 1</option>

                            <option value='option-2'>Option 2</option>

                            <option value='option-3'>Option 3</option>
                        </select>

                        <InputSearch
                            type='search'
                            name='search'
                            placeholder='Search...'
                            outline
                        />
                    </div>

                    <div className='actions'>
                        <Button
                            type='button'
                            leftIcon={<PencilLine size={24} />}
                            buttonType='white'
                            buttonSize='medium'
                        />

                        <Button
                            type='button'
                            leftIcon={<Trash size={24} />}
                            buttonType='white'
                            buttonSize='medium'
                        />
                    </div>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>
                                <div className='checkbox-all'>
                                    <Checkbox
                                        name='checkbox-all-products'
                                        id='checkbox-all-products'
                                    />

                                    <span>Product</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Inventory</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Color</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Price</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Rating</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-01-product'
                                            id='checkbox-01-product'
                                            defaultChecked
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0'
                                            alt='Men Grey Hoodie'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Men Grey Hoodie</span>

                                            <span className='category'>Hoodies</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>96 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>Black</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$49.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>5.0 (32 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-02-product'
                                            id='checkbox-02-product'
                                            defaultChecked
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1564257631407-4deb1f99d992'
                                            alt='Women Striped T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women Striped T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>56 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$34.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.8 (24 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-03-product'
                                            id='checkbox-03-product'
                                            defaultChecked
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1'
                                            alt='Women White T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women White T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>78 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$40.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>5.0 (54 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-04-product'
                                            id='checkbox-04-product'
                                            defaultChecked
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
                                            alt='Men White T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Men White T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>32 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$49.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.5 (31 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-05-product'
                                            id='checkbox-05-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f'
                                            alt='Women Red T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women Red T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>32 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>Red</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$34.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.9 (22 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-06-product'
                                            id='checkbox-06-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1656339504243-2df4c5ebf1c0'
                                            alt='Men Grey Hoodie'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Men Grey Hoodie</span>

                                            <span className='category'>Hoodies</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>96 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>Black</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$49.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>5.0 (32 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-07-product'
                                            id='checkbox-07-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1564257631407-4deb1f99d992'
                                            alt='Women Striped T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women Striped T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>56 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$34.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.8 (24 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-08-product'
                                            id='checkbox-08-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1548778943-5bbeeb1ba6c1'
                                            alt='Women White T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women White T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>78 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$40.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>5.0 (54 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-09-product'
                                            id='checkbox-09-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1521572163474-6864f9cf17ab'
                                            alt='Men White T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Men White T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>32 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>White</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$49.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.5 (31 Votes)</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='product'>
                                    <span className='title-head'>Product</span>

                                    <div className='product-container'>
                                        <Checkbox
                                            name='checkbox-10-product'
                                            id='checkbox-10-product'
                                        />

                                        <Image
                                            src='https://images.unsplash.com/photo-1519568470290-c0c1fbfff16f'
                                            alt='Women Red T-Shirt'
                                            width={48}
                                            height={48}
                                        />

                                        <div className='product-info'>
                                            <span className='name'>Women Red T-Shirt</span>

                                            <span className='category'>T-Shirt</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='inventory'>
                                    <span className='title-head'>Inventory</span>

                                    <span>32 in stock</span>
                                </div>
                            </td>

                            <td>
                                <div className='color'>
                                    <span className='title-head'>Color</span>

                                    <span>Red</span>
                                </div>
                            </td>

                            <td>
                                <div className='price'>
                                    <span className='title-head'>Price</span>

                                    <span>$34.90</span>
                                </div>
                            </td>

                            <td>
                                <div className='rating'>
                                    <span className='title-head'>Rating</span>

                                    <span>4.9 (22 Votes)</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination
                    totalCountOfRegisters={146}
                />
            </div>
        </>
    );
}
