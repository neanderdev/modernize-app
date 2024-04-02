'use client';

import dynamic from 'next/dynamic';
import { Props } from 'react-apexcharts';

const ApexChart = dynamic(() => import('react-apexcharts'), { ssr: false });

interface ChartProps extends Props { }

export function Chart({ ...rest }: ChartProps) {
    return <ApexChart {...rest} />
}
