'use client';

import React from 'react';

import Link from 'next/link';

import { transformData } from '@/lib/utils';
import { AreaChart } from '@tremor/react';

const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};

export default function Graph({
  icon,
  link,
  type,
  followersCount,
  rawData,
}: {
  icon: any;
  link: string;
  type: string;
  followersCount: string;
  rawData: any;
}) {
  const valueFormatter = (number: any) =>
    `${Intl.NumberFormat('us').format(number).toString()}`;
  const transformedData = transformData(rawData);
  return (
    <Link
      href={link}
      target="_blank"
      className="flex flex-col border p-4 rounded-md duration-200 border-secondaryDarker hover:border-secondaryDark group"
    >
      <div className="flex flex-row space-x-2 items-center text-secondaryDarker group-hover:text-secondaryDark duration-200 pb-2">
        {icon}
        <span>{type}</span>
      </div>

      <span className="text-3xl font-semibold text-secondaryDark">
        {followersCount}
      </span>
      <AreaChart
        data={transformedData}
        index="date"
        categories={['followers']}
        colors={['blue']}
        valueFormatter={valueFormatter}
        showLegend={false}
        showYAxis={false}
        showGradient={false}
        startEndOnly={true}
        autoMinValue={true}
        tickGap={1}
        className="mt-6 h-32"
      />
    </Link>
  );
}
