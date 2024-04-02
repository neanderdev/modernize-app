import { PencilLine, Plus, Trash } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Button } from '@/components/Button';
import { Checkbox } from '@/components/Checkbox';
import { InputSearch } from '@/components/InputSearch';
import { Pagination } from '@/components/Pagination';

import './styles.css';

export const metadata: Metadata = {
    title: 'Customers',
}

export default function CustomersPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Customers</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Export'
                        buttonType='white'
                        buttonSize='medium'
                    />

                    <Button
                        type='button'
                        title='Add Customer'
                        leftIcon={<Plus size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='customers'>
                <div className='header-card'>
                    <div className='filters'>
                        <select name='filter-customers'>
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

                                    <span>Name</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Location</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Orders</span>
                                </div>
                            </th>

                            <th>
                                <div>
                                    <span>Spent</span>
                                </div>
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-01-customer'
                                            id='checkbox-01-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-02-customer'
                                            id='checkbox-02-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-03-customer'
                                            id='checkbox-03-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-04-customer'
                                            id='checkbox-04-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-05-customer'
                                            id='checkbox-05-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-06-customer'
                                            id='checkbox-06-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-07-customer'
                                            id='checkbox-07-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-08-customer'
                                            id='checkbox-08-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-09-customer'
                                            id='checkbox-09-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <div className='name'>
                                    <span className='title-head'>Name</span>

                                    <div className='name-container'>
                                        <Checkbox
                                            name='checkbox-10-customer'
                                            id='checkbox-10-customer'
                                        />

                                        <Image
                                            src='https://github.com/neanderdev.png'
                                            alt='Neander de Souza'
                                            width={48}
                                            height={48}
                                        />

                                        <span className='name'>Neander de Souza</span>
                                    </div>
                                </div>
                            </td>

                            <td>
                                <div className='location'>
                                    <span className='title-head'>Location</span>

                                    <span>Brasil</span>
                                </div>
                            </td>

                            <td>
                                <div className='orders'>
                                    <span className='title-head'>Orders</span>

                                    <span>5</span>
                                </div>
                            </td>

                            <td>
                                <div className='spent'>
                                    <span className='title-head'>Spent</span>

                                    <span>$96.14</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <Pagination
                    totalCountOfRegisters={154}
                />
            </div>
        </>
    );
}
