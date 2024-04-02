import { PencilLine, Plus, Tag, Trash, Truck } from 'lucide-react';
import { Metadata } from 'next';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { InputSearch } from '@/components/InputSearch';
import { Pagination } from '@/components/Pagination';

import './styles.css';

export const metadata: Metadata = {
    title: 'Coupons',
}

export default function CouponsPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Coupons</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Create'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='coupons'>
                <div className='tabs'>
                    <button className='tab active' type='button'>
                        All Coupons
                    </button>

                    <button className='tab' type='button'>
                        Active Coupons
                    </button>

                    <button className='tab' type='button'>
                        Expired Coupons
                    </button>
                </div>

                <div className='header-card'>
                    <div className='filters'>
                        <select name='filter-coupons'>
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
                                        name='checkbox-all-customers'
                                        id='checkbox-all-customers'
                                    />

                                    <span>Coupon Name</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Usage</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Status</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Date</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-01-coupon'
                                            id='checkbox-01-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Summer discount 10% off</span>

                                            <span className='description'>Summer2020</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>15 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 2020 - May 15, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-02-coupon'
                                            id='checkbox-02-coupon'
                                        />

                                        <div className='icon gray'>
                                            <Truck size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Free shipping on all items</span>

                                            <span className='description'>Shipfreetomee15</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>42 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 2020 - May 15, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-03-coupon'
                                            id='checkbox-03-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Discount for women clothes 5%</span>

                                            <span className='description'>Womenclothing5</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>12 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>April 12, 2020 - April 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-04-coupon'
                                            id='checkbox-04-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Summer discount 10% off</span>

                                            <span className='description'>Summer2020</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>8 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>April 12, 2020 - April 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-05-coupon'
                                            id='checkbox-05-coupon'
                                        />

                                        <div className='icon gray'>
                                            <Truck size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Free shipping on all items</span>

                                            <span className='description'>Shipfreetomee15</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>18 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>April 12, 2020 - April 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-06-coupon'
                                            id='checkbox-06-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Discount for women clothes 10%</span>

                                            <span className='description'>Womenclothing5</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>57 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>Feb 14, 2020 - Feb 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-07-coupon'
                                            id='checkbox-07-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Summer discount 15% off</span>

                                            <span className='description'>Summer2020</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>16 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='active'
                                        title='Active'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>Feb 14, 2020 - Feb 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-08-coupon'
                                            id='checkbox-08-coupon'
                                        />

                                        <div className='icon gray'>
                                            <Truck size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Free shipping on all items</span>

                                            <span className='description'>Shipfreetomee15</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>15 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='expired'
                                        title='Expired'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>Feb 14, 2020 - Feb 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-09-coupon'
                                            id='checkbox-09-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Discount for women clothes 10%</span>

                                            <span className='description'>Womenclothing5</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>12 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='expired'
                                        title='Expired'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>Feb 14, 2020 - Feb 20, 2020</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='coupon-name'>
                                    <span className='title-head'>Coupon Name</span>

                                    <div className='coupon-container'>
                                        <Checkbox
                                            name='checkbox-10-coupon'
                                            id='checkbox-10-coupon'
                                        />

                                        <div className='icon blue'>
                                            <Tag size={24} />
                                        </div>

                                        <div className='coupon-info'>
                                            <span className='name'>Discount for women clothes 5%</span>

                                            <span className='description'>Womenclothing5</span>
                                        </div>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='usage'>
                                    <span className='title-head'>Usage</span>

                                    <span>76 times</span>
                                </div>
                            </td>

                            <td>
                                <div className='status'>
                                    <span className='title-head'>Status</span>

                                    <Badge
                                        type='expired'
                                        title='Expired'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>Feb 14, 2020 - Feb 20, 2020</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination
                    totalCountOfRegisters={120}
                />
            </div>
        </>
    );
}
