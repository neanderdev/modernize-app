import { PencilLine, Plus, Trash } from 'lucide-react';
import { Metadata } from 'next';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { InputSearch } from '@/components/InputSearch';
import { Pagination } from '@/components/Pagination';

import './styles.css';

export const metadata: Metadata = {
    title: 'Orders',
}

export default function OrdersPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Orders</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Export'
                        buttonType='white'
                        buttonSize='medium'
                    />

                    <Button
                        type='button'
                        title='Add Order'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='orders'>
                <div className='header-card'>
                    <div className='filters'>
                        <select name='filter-orders'>
                            <option value=''>Filter</option>

                            <option value='filter-1'>Filter 1</option>

                            <option value='filter-2'>Filter 2</option>

                            <option value='filter-3'>Filter 3</option>
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
                                        name='checkbox-all-orders'
                                        id='checkbox-all-orders'
                                    />

                                    <span>Order</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Date</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Customer</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Payment Status</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Order Status</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Total</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-01-orders'
                                            id='checkbox-01-orders'
                                            defaultChecked
                                        />

                                        <span>#12512B</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:20 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Tom Anderson</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Ready'
                                        type='ready'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$49.90</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-02-orders'
                                            id='checkbox-02-orders'
                                            defaultChecked
                                        />

                                        <span>#12523C</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:15 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Jayden Walker</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Ready'
                                        type='ready'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$34.36</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-03-orders'
                                            id='checkbox-03-orders'
                                            defaultChecked
                                        />

                                        <span>#51232A</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:15 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Inez Kim</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Ready'
                                        type='ready'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$5.51</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-04-orders'
                                            id='checkbox-04-orders'
                                            defaultChecked
                                        />

                                        <span>#23534D</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:12 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Francisco Henry</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Shipped'
                                        type='shipped'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$29.74</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-05-orders'
                                            id='checkbox-05-orders'
                                            defaultChecked
                                        />

                                        <span>#51323C</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:12 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Violet Phillips</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Shipped'
                                        type='shipped'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$23.06</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-06-orders'
                                            id='checkbox-06-orders'
                                        />

                                        <span>#35622A</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:12 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Rosetta Becker</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Shipped'
                                        type='shipped'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$87.44</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-07-orders'
                                            id='checkbox-07-orders'
                                        />

                                        <span>#34232D</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:10 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Dean Love</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Ready'
                                        type='ready'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$44.55</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-08-orders'
                                            id='checkbox-08-orders'
                                        />

                                        <span>#56212D</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:08 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Nettie Tyler</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Ready'
                                        type='ready'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$36.79</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-09-orders'
                                            id='checkbox-09-orders'
                                        />

                                        <span>#76543E</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:08 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Lora Weaver</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Shipped'
                                        type='shipped'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$28.78</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='order'>
                                    <span className='title-head'>Order</span>

                                    <div>
                                        <Checkbox
                                            name='checkbox-10-orders'
                                            id='checkbox-10-orders'
                                        />

                                        <span>#12512B</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='date'>
                                    <span className='title-head'>Date</span>

                                    <span>May 5, 4:08 PM</span>
                                </div>
                            </td>

                            <td>
                                <div className='customer'>
                                    <span className='title-head'>Customer</span>

                                    <span>Vincent Cannon</span>
                                </div>
                            </td>

                            <td>
                                <div className='payment-status'>
                                    <span className='title-head'>Payment Status</span>

                                    <Badge
                                        title='Paid'
                                        type='paid'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='order-status'>
                                    <span className='title-head'>Order Status</span>

                                    <Badge
                                        title='Shipped'
                                        type='shipped'
                                    />
                                </div>
                            </td>

                            <td>
                                <div className='total'>
                                    <span className='title-head'>Total</span>

                                    <span>$96.46</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination
                    totalCountOfRegisters={274}
                />
            </div>
        </>
    );
}

