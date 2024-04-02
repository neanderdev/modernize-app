import {
    ArrowDownToLine,
    ArrowUp,
    Laptop,
    MonitorSmartphone,
    Smartphone,
    Tablet
} from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/Badge';
import { Button } from '@/components/Button';
import { Chart } from '@/components/Chart';
import { Separator } from '@/components/Separator';
import { Stat } from '@/components/Stat';

import './styles.css';

export const metadata: Metadata = {
    title: 'Reports',
}

export default function ReportsPage() {
    return (
        <>
            <div className='header-admin'>
                <h5>Reports</h5>

                <div className='buttons-wrapper'>
                    <Button
                        type='button'
                        title='Export'
                        leftIcon={<ArrowDownToLine size={24} />}
                        buttonType='primary'
                        buttonSize='medium'
                    />
                </div>
            </div>

            <div className='reports'>
                <div className='customer-growth'>
                    <div className='header-card'>
                        <span>Customer Growth</span>

                        <select name='filter-customer-growth'>
                            <option value='last-12-months'>Last 12 Months</option>

                            <option value='last-6-months'>Last 6 Months</option>

                            <option value='last-1-months'>Last 1 Months</option>
                        </select>
                    </div>

                    <div className='chart-legends'>
                        <div className='legend'>
                            <div className='legend-square'>
                                <div className='square returning-customers'></div>

                                <span>Returning customers</span>
                            </div>

                            <div className='legend-square'>
                                <div className='square new-customers'></div>

                                <span>New customers</span>
                            </div>
                        </div>
                    </div>

                    <Chart
                        type='bar'
                        options={{
                            chart: {
                                type: 'bar',
                                width: '100%',
                                height: '80%',
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
                                    'Jan',
                                    'Feb',
                                    'Mar',
                                    'Apr',
                                    'May',
                                    'Jun',
                                    'Jul',
                                    'Aug',
                                    'Sep',
                                    'Oct',
                                    'Nov',
                                    'Dec',
                                ],
                            },
                            dataLabels: {
                                enabled: false,
                            },
                            plotOptions: {
                                bar: {
                                    borderRadius: 6,
                                    columnWidth: '50%',
                                },
                            },
                            stroke: {
                                show: true,
                                width: 6,
                                colors: ['transparent'],
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
                                name: 'Returning customers',
                                data: [
                                    111,
                                    75,
                                    50,
                                    250,
                                    164,
                                    198,
                                    297,
                                    350,
                                    98,
                                    25,
                                    198,
                                    350,
                                ],
                                color: '#d7dbec',
                            },
                            {
                                name: 'New customers',
                                data: [
                                    80,
                                    56,
                                    40,
                                    125,
                                    250,
                                    350,
                                    68,
                                    98,
                                    125,
                                    75,
                                    254,
                                    299,
                                ],
                                color: '#1e5eff',
                            },
                        ]}
                        width='100%'
                        height='80%'
                    />
                </div>

                <div className='stats'>
                    <Stat
                        value={5.653}
                        title='Existing Users'
                        type='increased'
                        percentage={22.45}
                    />

                    <Stat
                        value={1.650}
                        title='New Users'
                        type='increased'
                        percentage={15.34}
                    />

                    <Stat
                        value={9.504}
                        title='Total Visits'
                        type='decreased'
                        percentage={18.25}
                    />

                    <Stat
                        value={5.450}
                        title='Unique Visits'
                        type='decreased'
                        percentage={10.24}
                    />
                </div>

                <div className='sales-goal-and-conversion-rate-and-average-order-value'>
                    <div className='sales-goal-and-conversion-rate'>
                        <div className='sales-goal'>
                            <div className='header-card'>
                                <span>Sales Goal</span>
                            </div>

                            <Chart
                                type='radialBar'
                                options={{
                                    chart: {
                                        type: 'radialBar',
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
                                    labels: ['Sales Goal'],
                                    colors: ['#ffc700'],
                                    dataLabels: {
                                        enabled: false,
                                    },
                                    plotOptions: {
                                        radialBar: {
                                            hollow: {
                                                size: '60%',
                                            },
                                            track: {
                                                background: '#E6E9F4',
                                            },
                                            dataLabels: {
                                                show: true,
                                                name: {
                                                    show: false,
                                                },
                                                value: {
                                                    show: true,
                                                    fontSize: '20px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 700,
                                                    color: '#131523',
                                                    offsetY: 8,
                                                    // formatter: function (val) {
                                                    //     return val + '%';
                                                    // },
                                                },
                                            },
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
                                series={[75]}
                                width='100%'
                                height='60%'
                            />

                            <div className='footer-legends'>
                                <div className='footer-legend'>
                                    <span className='name'>Sold for:</span>

                                    <span className='value'>$15.000</span>
                                </div>

                                <div className='footer-legend'>
                                    <span className='name'>Month goal:</span>

                                    <span className='value'>$20.000</span>
                                </div>

                                <div className='footer-legend'>
                                    <span className='name'>Left:</span>

                                    <span className='value'>$5.000</span>
                                </div>
                            </div>
                        </div>

                        <div className='conversion-rate'>
                            <div className='header-card'>
                                <span>Conversion Rate</span>
                            </div>

                            <Chart
                                type='radialBar'
                                options={{
                                    chart: {
                                        type: 'radialBar',
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
                                    labels: ['Conversion Rate'],
                                    colors: ['#1fd286'],
                                    dataLabels: {
                                        enabled: false,
                                    },
                                    plotOptions: {
                                        radialBar: {
                                            hollow: {
                                                size: '60%',
                                            },
                                            track: {
                                                background: '#E6E9F4',
                                            },
                                            dataLabels: {
                                                show: true,
                                                name: {
                                                    show: false,
                                                },
                                                value: {
                                                    show: true,
                                                    fontSize: '20px',
                                                    fontFamily: 'Inter, sans-serif',
                                                    fontWeight: 700,
                                                    color: '#131523',
                                                    offsetY: 8,
                                                    // formatter: function (val) {
                                                    //     return val + '%';
                                                    // },
                                                },
                                            },
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
                                series={[25]}
                                width='100%'
                                height='60%'
                            />

                            <div className='footer-legends'>
                                <div className='footer-legend'>
                                    <span className='name'>Cart:</span>

                                    <span className='value'>35%</span>
                                </div>

                                <div className='footer-legend'>
                                    <span className='name'>Checkout:</span>

                                    <span className='value'>29%</span>
                                </div>

                                <div className='footer-legend'>
                                    <span className='name'>Purchase:</span>

                                    <span className='value'>25%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='average-order-value'>
                        <div className='header-card'>
                            <span>Average Order Value</span>
                        </div>

                        <div className='legend-value'>
                            <p>This Month: <strong>$48.90</strong></p>

                            <p>Previous Month: <strong>$48.90</strong></p>
                        </div>

                        <Chart
                            type='line'
                            options={{
                                chart: {
                                    type: 'line',
                                    width: '100%',
                                    height: '80%',
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
                                    categories: ['4am', '8am', '12am', '4pm', '8pm', 'Jun 12'],
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
                                    name: 'Average Order Value',
                                    data: [100, 150, 250, 110, 210, 330],
                                    color: '#1e5eff',
                                },
                            ]}
                            width='100%'
                            height='80%'
                        />
                    </div>
                </div>

                <div className='customer-demographics-and-visits-by-device-and-online-sessions'>
                    <div className='customer-demographics'>
                        <div className='header-card'>
                            <span>Customer Demographics</span>
                        </div>

                        <Chart
                            type='bar'
                            options={{
                                chart: {
                                    type: 'bar',
                                    width: '100%',
                                    height: '85%',
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
                                    categories: ['United States', 'Europe', 'Australia', 'Other'],
                                },
                                dataLabels: {
                                    enabled: false,
                                },
                                plotOptions: {
                                    bar: {
                                        borderRadius: 6,
                                        columnWidth: '25%',
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
                                    name: 'Customer Demographics',
                                    data: [29.051, 18.041, 10.43, 5.42],
                                    color: '#F99600',
                                },
                            ]}
                            width='100%'
                            height='85%'
                        />
                    </div>

                    <div className='visits-by-device-and-online-sessions'>
                        <div className='visits-by-device'>
                            <div className='header-card'>
                                <span>Visits by Device</span>
                            </div>

                            <div className='devices'>
                                <div className='device'>
                                    <span>
                                        <Smartphone size={24} />

                                        Mobile
                                    </span>

                                    <strong>62%</strong>
                                </div>

                                <div className='device'>
                                    <span>
                                        <Laptop size={24} />

                                        Laptop
                                    </span>

                                    <strong>20%</strong>
                                </div>

                                <div className='device'>
                                    <span>
                                        <Tablet size={24} />

                                        Tablet
                                    </span>

                                    <strong>13%</strong>
                                </div>

                                <div className='device'>
                                    <span>
                                        <MonitorSmartphone size={24} />

                                        Other
                                    </span>

                                    <strong>5%</strong>
                                </div>
                            </div>
                        </div>

                        <div className='online-sessions'>
                            <div className='header-card'>
                                <span>Online Session</span>
                            </div>

                            <div className='online-sessions-info'>
                                <strong>128 <ArrowUp size={24} /></strong>

                                <span>Active Users</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='top-customers-and-top-products'>
                    <div className='top-customers'>
                        <div className='header-card'>
                            <span>Top Customers</span>
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

                                            <div>
                                                <Image
                                                    className='avatar'
                                                    src='https://github.com/neanderdev.png'
                                                    alt='Neander de Souza'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Neander de Souza</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='orders'>
                                            <span className='title-head'>Orders</span>

                                            <span>52</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='spent'>
                                            <span className='title-head'>Spent</span>

                                            <span>$969.37</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='name'>
                                            <span className='title-head'>Name</span>

                                            <div>
                                                <Image
                                                    className='avatar'
                                                    src='https://github.com/neanderdev.png'
                                                    alt='Neander de Souza'
                                                    width={36}
                                                    height={36}
                                                />
                                                <span>Neander de Souza</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='orders'>
                                            <span className='title-head'>Orders</span>

                                            <span>43</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='spent'>
                                            <span className='title-head'>Spent</span>

                                            <span>$909.54</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='name'>
                                            <span className='title-head'>Name</span>

                                            <div>
                                                <Image
                                                    className='avatar'
                                                    src='https://github.com/neanderdev.png'
                                                    alt='Neander de Souza'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Neander de Souza</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='orders'>
                                            <span className='title-head'>Orders</span>

                                            <span>41</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='spent'>
                                            <span className='title-head'>Spent</span>

                                            <span>$728.90</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='name'>
                                            <span className='title-head'>Name</span>

                                            <div>
                                                <Image
                                                    className='avatar'
                                                    src='https://github.com/neanderdev.png'
                                                    alt='Neander de Souza'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Neander de Souza</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='orders'>
                                            <span className='title-head'>Orders</span>

                                            <span>38</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='spent'>
                                            <span className='title-head'>Spent</span>

                                            <span>$679.42</span>
                                        </div>
                                    </td>
                                </tr>

                                <tr>
                                    <td>
                                        <div className='name'>
                                            <span className='title-head'>Name</span>

                                            <div>
                                                <Image
                                                    className='avatar'
                                                    src='https://github.com/neanderdev.png'
                                                    alt='Neander de Souza'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Neander de Souza</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='orders'>
                                            <span className='title-head'>Orders</span>

                                            <span>34</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='spent'>
                                            <span className='title-head'>Spent</span>

                                            <span>$549.71</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className='top-products'>
                        <div className='header-card'>
                            <span>Top Products</span>
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
                                            <span>Clicks</span>
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
                                                    alt='Men Grey Hoodie'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Men Grey Hoodie</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='clicks'>
                                            <span className='title-head'>Clicks</span>

                                            <span>12.040</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='units-sold'>
                                            <span className='title-head'>Units Sold</span>

                                            <span>195</span>
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
                                                    alt='Men Grey Hoodie'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Men Grey Hoodie</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='clicks'>
                                            <span className='title-head'>Clicks</span>

                                            <span>11.234</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='units-sold'>
                                            <span className='title-head'>Units Sold</span>

                                            <span>146</span>
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
                                                    alt='Men Grey Hoodie'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Men Grey Hoodie</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='clicks'>
                                            <span className='title-head'>Clicks</span>

                                            <span>10.054</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='units-sold'>
                                            <span className='title-head'>Units Sold</span>

                                            <span>122</span>
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
                                                    alt='Men Grey Hoodie'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Men Grey Hoodie</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='clicks'>
                                            <span className='title-head'>Clicks</span>

                                            <span>8.405</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='units-sold'>
                                            <span className='title-head'>Units Sold</span>

                                            <span>110</span>
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
                                                    alt='Men Grey Hoodie'
                                                    width={36}
                                                    height={36}
                                                />

                                                <span>Men Grey Hoodie</span>
                                            </div>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='clicks'>
                                            <span className='title-head'>Clicks</span>

                                            <span>5.600</span>
                                        </div>
                                    </td>

                                    <td>
                                        <div className='units-sold'>
                                            <span className='title-head'>Units Sold</span>

                                            <span>87</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className='store-funnel-and-age-distribution'>
                    <div className='store-funnel'>
                        <div className='header-card'>
                            <span>Store Funnel</span>

                            <select name='filter-store-funnel'>
                                <option value='last-7-days'>Last 7 Days</option>

                                <option value='last-14-days'>Last 14 Days</option>

                                <option value='last-30-days'>Last 30 Days</option>
                            </select>
                        </div>

                        <p>
                            Conversion Rate: <strong>28%</strong>

                            <Badge
                                title='4% Increase'
                                type='increase'
                            />
                        </p>

                        <Chart
                            type='bar'
                            options={{
                                chart: {
                                    type: 'bar',
                                    width: '100%',
                                    height: '80%',
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
                                        'Visited Site',
                                        'Added to Cart',
                                        'Proceed to Checkout',
                                        'Made a Purchase',
                                    ],
                                },
                                dataLabels: {
                                    enabled: false,
                                },
                                plotOptions: {
                                    bar: {
                                        borderRadius: 4,
                                        columnWidth: '20%',
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
                                    name: 'Store Funnel',
                                    data: [1000, 750, 985, 1245],
                                    color: '#1E5EFF',
                                },
                            ]}
                            width='100%'
                            height='80%'
                        />
                    </div>

                    <div className='age-distribution'>
                        <div className='header-card'>
                            <span>Age Distribution</span>
                        </div>

                        <Chart
                            type='donut'
                            options={{
                                chart: {
                                    type: 'donut',
                                    width: '100%',
                                    height: '40%',
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
                                labels: ['0-18 Years', '18-30 Years', '30-40 Years', 'Other'],
                                dataLabels: {
                                    enabled: false,
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
                            series={[50, 30, 10, 10]}
                            width='100%'
                            height='40%'
                        />

                        <div className='legends'>
                            <div className='legend'>
                                <div>
                                    <div className='square blue'></div>

                                    <span>0-18 years</span>
                                </div>

                                <span>50%</span>
                            </div>

                            <div className='legend'>
                                <div>
                                    <div className='square yellow'></div>

                                    <span>18-30 years</span>
                                </div>

                                <span>30%</span>
                            </div>

                            <div className='legend'>
                                <div>
                                    <div className='square orange'></div>

                                    <span>30-40 years</span>
                                </div>

                                <span>10%</span>
                            </div>

                            <div className='legend'>
                                <div>
                                    <div className='square green'></div>

                                    <span>Other</span>
                                </div>

                                <span>10%</span>
                            </div>
                        </div>

                        <Separator />

                        <Link href=''>Find out more</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
