import { MoveLeft, Star, X } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { Separator } from '@/components/Separator';
import { Textarea } from '@/components/Textarea';

import './styles.css';

export const metadata: Metadata = {
    title: 'Customer Information',
}

export default function CustomerInformationPage() {
    return (
        <>
            <div className='header-admin'>
                <div className='title'>
                    <Link href='/customers'>
                        <MoveLeft size={16} />

                        Back
                    </Link>

                    <h5>Customer Information</h5>
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

            <div className='customers-information-container-and-overview-and-tags'>
                <div className='customers-information-container'>
                    <div className='customers-information'>
                        <div className='customers-information-header'>
                            <div className='customers-information-header-container'>
                                <Image
                                    src='https://github.com/neanderdev.png'
                                    alt='Neander de Souza'
                                    width={72}
                                    height={72}
                                />

                                <div className='customers-info-container'>
                                    <span className='name'>Neander de Souza</span>

                                    <span className='location'>Brasil</span>

                                    <span className='qtd-orders'>5 Orders</span>

                                    <span className='customer-there'>Customer for 2 years</span>
                                </div>
                            </div>

                            <div className='ratings'>
                                <Star size={24} className='rating' />

                                <Star size={24} className='rating' />

                                <Star size={24} className='rating' />

                                <Star size={24} className='rating' />

                                <Star size={24} className='' />
                            </div>
                        </div>

                        <Separator />

                        <div className='header-card'>
                            <span>Customer Notes</span>
                        </div>

                        <Textarea
                            label='Notes'
                            name='notes'
                            id='notes'
                            placeholder='Add notes about customer'
                            textareaSize='large'
                        />
                    </div>

                    <div className='customer-orders'>
                        <div className='header-card'>
                            <span>Customer Orders</span>
                        </div>

                        <table>
                            <thead>
                                <tr>
                                    <th>
                                        <div>
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
                                            <span>Order Status</span>
                                        </div>
                                    </th>

                                    <th>
                                        <div>
                                            <span>Price</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>
                                        <div className='order'>
                                            <span className='title-head'>Order</span>

                                            <span>#23534D</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='date'>
                                            <span className='title-head'>Date</span>

                                            <span>May 25, 3:12 PM</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='order-status'>
                                            <span className='title-head'>Order Status</span>

                                            <Badge
                                                title='Pending'
                                                type='pending'
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className='price'>
                                            <span className='title-head'>Price</span>

                                            <span>$29.74</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='order'>
                                            <span className='title-head'>Order</span>

                                            <span>#12512B</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='date'>
                                            <span className='title-head'>Date</span>

                                            <span>May 10, 2:00 PM</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='order-status'>
                                            <span className='title-head'>Order Status</span>

                                            <Badge
                                                title='Completed'
                                                type='completed'
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className='price'>
                                            <span className='title-head'>Price</span>

                                            <span>$23.06</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='order'>
                                            <span className='title-head'>Order</span>

                                            <span>#23534D</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='date'>
                                            <span className='title-head'>Date</span>

                                            <span>April 18, 8:00 AM</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='order-status'>
                                            <span className='title-head'>Order Status</span>

                                            <Badge
                                                title='Completed'
                                                type='completed'
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className='price'>
                                            <span className='title-head'>Price</span>

                                            <span>$29.74</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='order'>
                                            <span className='title-head'>Order</span>

                                            <span>#76543E</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='date'>
                                            <span className='title-head'>Date</span>

                                            <span>April 12, 8:00 AM</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='order-status'>
                                            <span className='title-head'>Order Status</span>

                                            <Badge
                                                title='Completed'
                                                type='completed'
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className='price'>
                                            <span className='title-head'>Price</span>

                                            <span>$23.06</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='order'>
                                            <span className='title-head'>Order</span>

                                            <span>#51323C</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='date'>
                                            <span className='title-head'>Date</span>

                                            <span>April 10, 4:12 PM</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='order-status'>
                                            <span className='title-head'>Order Status</span>

                                            <Badge
                                                title='Completed'
                                                type='completed'
                                            />
                                        </div>
                                    </td>

                                    <td>
                                        <div className='price'>
                                            <span className='title-head'>Price</span>

                                            <span>$23.06</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='overview-and-tags'>
                    <div className='overview'>
                        <div className='header-card'>
                            <span>Overview</span>

                            <Link href='/customers/1' className='edit-customer'>Edit</Link>
                        </div>

                        <div className='overview-container'>
                            <div className='overview-info'>
                                <span>Address</span>

                                <p>831 Wilhelmine Glen 40583-2293 South Lelastad Ireland</p>
                            </div>

                            <div className='overview-info'>
                                <span>Email Address</span>

                                <p>lenora_rob@yahoo.com</p>
                            </div>

                            <div className='overview-info'>
                                <span>Phone</span>

                                <p>636-458-4820</p>
                            </div>
                        </div>

                        <Separator />

                        <Link href='' className='delete-customer'>Delete Customer</Link>
                    </div>

                    <div className='tags'>
                        <div className='header-card'>
                            <span>Tags</span>
                        </div>

                        <Input
                            type='text'
                            name='add-tags'
                            id='add-tags'
                            label='Add Tags'
                            inputSize='medium'
                            placeholder='Enter tag name'
                        />

                        <div className='list-tags'>
                            <div className='tag'>
                                <span>Vip Costumer</span>

                                <X size={16} />
                            </div>

                            <div className='tag'>
                                <span>Europe</span>

                                <X size={16} />
                            </div>
                        </div>
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
