"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const Chart = () => {

    const {textChart,callChart,videoChart} = useContext(Data)

    const initial = callChart.length === 0
                    && textChart.length === 0
                    && videoChart.length === 0

    const data = initial ? 
        [
            { name: 'Call', value: 1, fill: '#222f3e' },
            { name: 'Text', value: 1, fill: '#5f27cd' },
            { name: 'Video', value: 1, fill: '#218c74' },
        ]
        : [
            { name: 'Call', value: callChart.length, fill: '#222f3e' },
            { name: 'Text', value: textChart.length, fill: '#5f27cd' },
            { name: 'Video', value: videoChart.length, fill: '#218c74' },
        ]

    return (
        <div className='flex justify-center items-center'>
            <PieChart style={{ width: '25%', height: '30%', aspectRatio: 1 }} responsive>
                <Pie
                    data={data}
                    innerRadius="80%"
                    outerRadius="100%"

                    cornerRadius="50%"
                    fill="#8884d8"

                    paddingAngle={5}
                    dataKey="value"
                />
                <Legend iconType="circle" iconSize={12} verticalAlign="bottom" wrapperStyle={{ bottom: -10 }}></Legend>
                <Tooltip></Tooltip>
            </PieChart>
        </div>
    );
};

export default Chart;