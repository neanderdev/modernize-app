import { DollarSign, Settings, ShoppingCart, User, Users } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Chart } from '@/components/Chart';
import { Stat } from '@/components/Stat';

import './styles.css';

export const metadata: Metadata = {
    title: 'Dashboard',
}

export default function DashboardPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Dashboard</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Manage'
                        leftIcon={<Settings size={24} />}
                        buttonType='white'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='stats'>
                <Stat
                    value='R$ 10.000,00'
                    title='Total Revenue'
                    type='increased'
                    percentage={22.45}
                    rightIcon={<DollarSign size={24} />}
                />

                <Stat
                    value={1056}
                    title='Orders'
                    type='increased'
                    percentage={15.34}
                    rightIcon={<ShoppingCart size={24} />}
                />

                <Stat
                    value={48}
                    title='Active Sessions'
                    type='decreased'
                    percentage={18.25}
                    rightIcon={<User size={24} />}
                />

                <Stat
                    value={5024}
                    title='Total Sessions'
                    type='decreased'
                    percentage={10.24}
                    rightIcon={<Users size={24} />}
                />
            </div>

            <div className='orders-over-time-and-last-days-sales'>
                <div className='orders-over-time'>
                    <div className='header-card'>
                        <span>Orders Over Time</span>

                        <select name='filter-orders'>
                            <option value='last-12-hours'>Last 12 Hours</option>

                            <option value='last-7-days'>Last 7 Days</option>

                            <option value='last-30-days'>Last 30 Days</option>
                        </select>
                    </div>

                    <div className='chart-legends'>
                        <div className='stats-legend'>
                            <div className='stat-legend'>
                                <h6>645</h6>

                                <span>Orders on May 22</span>
                            </div>

                            <div className='stat-legend'>
                                <h6>472</h6>

                                <span>Orders on May 21</span>
                            </div>
                        </div>

                        <div className='legend'>
                            <div className='legend-square'>
                                <div className='square may-23'></div>

                                <span>May 23</span>
                            </div>

                            <div className='legend-square'>
                                <div className='square may-24'></div>

                                <span>May 24</span>
                            </div>
                        </div>
                    </div>

                    <Chart
                        type='line'
                        options={{
                            chart: {
                                type: 'line',
                                width: '100%',
                                height: '75%',
                                toolbar: {
                                    show: false,
                                },
                                animations: {
                                    enabled: true,
                                    easing: 'easeinout',
                                    speed: 800,
                                    animateGradually: {
                                        enabled: true,
                                        delay: 150,
                                    },
                                    dynamicAnimation: {
                                        enabled: true,
                                        speed: 350,
                                    },
                                },
                            },
                            xaxis: {
                                type: 'category',
                                categories: [
                                    '4am',
                                    '5am',
                                    '6am',
                                    '7am',
                                    '8am',
                                    '9am',
                                    '10am',
                                    '11am',
                                    '12am',
                                    '1pm',
                                    '2pm',
                                    '3pm',
                                ],
                            },
                            grid: {
                                show: false,
                                xaxis: {
                                    lines: {
                                        show: false,
                                    },
                                },
                                yaxis: {
                                    lines: {
                                        show: false,
                                    },
                                },
                            },
                            legend: {
                                show: false,
                            },
                        }}
                        series={[
                            {
                                name: 'May 23',
                                data: [250, 110, 356, 95, 42, 269, 105, 198, 97, 250, 365, 412],
                                color: '#d9e4ff',
                            },
                            {
                                name: 'May 24',
                                data: [100, 150, 250, 110, 210, 330, 495, 587, 75, 95, 153, 369],
                                color: '#1e5eff',
                            },
                        ]}
                        width='100%'
                        height='75%'
                    />
                </div>

                <div className='last-days-sales'>
                    <div className='header-card'>
                        <span>Last 7 Days Sales</span>
                    </div>

                    <div className='stat-legend'>
                        <h6>1,259</h6>

                        <span>Items Sold</span>
                    </div>

                    <div className='stat-legend'>
                        <h6>$12,546</h6>

                        <span>Revenue</span>
                    </div>

                    <Chart
                        type='bar'
                        options={{
                            chart: {
                                type: 'bar',
                                width: '100%',
                                height: '60%',
                                toolbar: {
                                    show: false,
                                },
                                animations: {
                                    enabled: true,
                                    easing: 'easeinout',
                                    speed: 800,
                                    animateGradually: {
                                        enabled: true,
                                        delay: 150,
                                    },
                                    dynamicAnimation: {
                                        enabled: true,
                                        speed: 350,
                                    },
                                },
                            },
                            xaxis: {
                                type: 'category',
                                categories: ['12', '13', '14', '15', '16', '17', '18'],
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            plotOptions: {
                                bar: {
                                    borderRadius: 4,
                                    columnWidth: '35%',
                                },
                            },
                            grid: {
                                show: false,
                                xaxis: {
                                    lines: {
                                        show: false,
                                    },
                                },
                                yaxis: {
                                    lines: {
                                        show: false,
                                    },
                                },
                            },
                            legend: {
                                show: false,
                            },
                        }}
                        series={[
                            {
                                name: 'Last 7 Days Sales',
                                data: [111, 75, 50, 250, 164, 198, 297],
                                color: '#1FD286',
                            },
                        ]}
                        width='100%'
                        height='60%'
                    />
                </div>
            </div>

            <div className='recent-transactions-and-top-products-by-units-sold'>
                <div className='recent-transactions'>
                    <div className='header-card'>
                        <span>Recent Transactions</span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div>
                                        <span>Name</span>
                                    </div>
                                </th>

                                <th>
                                    <div>
                                        <span>Date</span>
                                    </div>
                                </th>

                                <th>
                                    <div>
                                        <span>Amount</span>
                                    </div>
                                </th>

                                <th>
                                    <div>
                                        <span>Status</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <span>Jessica S.</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='date'>
                                        <span className='title-head'>Date</span>

                                        <span>06.03.2024</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='amount'>
                                        <span className='title-head'>Amount</span>

                                        <span>$124.97</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='status'>
                                        <span className='title-head'>Status</span>

                                        <Badge
                                            title='Paid'
                                            type='paid'
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <span>Andrew S.</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='date'>
                                        <span className='title-head'>Date</span>

                                        <span>06.03.2024</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='amount'>
                                        <span className='title-head'>Amount</span>

                                        <span>$55.42</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='status'>
                                        <span className='title-head'>Status</span>

                                        <Badge
                                            title='Pending'
                                            type='pending'
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <span>Kevin S.</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='date'>
                                        <span className='title-head'>Date</span>

                                        <span>06.03.2024</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='amount'>
                                        <span className='title-head'>Amount</span>

                                        <span>$89.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='status'>
                                        <span className='title-head'>Status</span>

                                        <Badge
                                            title='Paid'
                                            type='paid'
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <span>Jack S.</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='date'>
                                        <span className='title-head'>Date</span>

                                        <span>06.03.2024</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='amount'>
                                        <span className='title-head'>Amount</span>

                                        <span>$144.94</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='status'>
                                        <span className='title-head'>Status</span>

                                        <Badge
                                            title='Pending'
                                            type='pending'
                                        />
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <span>Arthur S.</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='date'>
                                        <span className='title-head'>Date</span>

                                        <span>06.03.2024</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='amount'>
                                        <span className='title-head'>Amount</span>

                                        <span>$70.52</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='status'>
                                        <span className='title-head'>Status</span>

                                        <Badge
                                            title='Paid'
                                            type='paid'
                                        />
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='top-products-by-units-sold'>
                    <div className='header-card'>
                        <span>Top Products by Units Sold</span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>
                                    <div>
                                        <span>Name</span>
                                    </div>
                                </th>

                                <th>
                                    <div>
                                        <span>Price</span>
                                    </div>
                                </th>

                                <th>
                                    <div>
                                        <span>Units Sold</span>
                                    </div>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <div>
                                            <Image
                                                src='https://images.unsplash.com/photo-1581655353564-df123a1eb820'
                                                alt='Camiseta Branca'
                                                width={36}
                                                height={36}
                                            />

                                            <span>Men Grey Hoodie</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='price'>
                                        <span className='title-head'>Price</span>

                                        <span>$49.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='units-sold'>
                                        <span className='title-head'>Units Sold</span>

                                        <span>204</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <div>
                                            <Image
                                                src='https://images.unsplash.com/photo-1581655353564-df123a1eb820'
                                                alt='Camiseta Branca'
                                                width={36}
                                                height={36}
                                            />

                                            <span>Women Striped T-Shirt</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='price'>
                                        <span className='title-head'>Price</span>

                                        <span>$34.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='units-sold'>
                                        <span className='title-head'>Units Sold</span>

                                        <span>155</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <div>
                                            <Image
                                                src='https://images.unsplash.com/photo-1581655353564-df123a1eb820'
                                                alt='Camiseta Branca'
                                                width={36}
                                                height={36}
                                            />


                                            <span>Women White T-Shirt</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='price'>
                                        <span className='title-head'>Price</span>

                                        <span>$40.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='units-sold'>
                                        <span className='title-head'>Units Sold</span>

                                        <span>120</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <div>
                                            <Image
                                                src='https://images.unsplash.com/photo-1581655353564-df123a1eb820'
                                                alt='Camiseta Branca'
                                                width={36}
                                                height={36}
                                            />

                                            <span>Men White T-Shirt</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='price'>
                                        <span className='title-head'>Price</span>

                                        <span>$49.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='units-sold'>
                                        <span className='title-head'>Units Sold</span>

                                        <span>204</span>
                                    </div>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <div className='name'>
                                        <span className='title-head'>Name</span>

                                        <div>
                                            <Image
                                                src='https://images.unsplash.com/photo-1581655353564-df123a1eb820'
                                                alt='Camiseta Branca'
                                                width={36}
                                                height={36}
                                            />

                                            <span>Women Red T-Shirt</span>
                                        </div>
                                    </div>
                                </td>

                                <td>
                                    <div className='price'>
                                        <span className='title-head'>Price</span>

                                        <span>$34.90</span>
                                    </div>
                                </td>

                                <td>
                                    <div className='units-sold'>
                                        <span className='title-head'>Units Sold</span>

                                        <span>155</span>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
