"use client"
import { Data } from '@/Context/Context';
import React, { useContext } from 'react';
import { Legend, Pie, PieChart, Tooltip } from 'recharts';


const Chart = () => {

    const {textChart,callChart,videoChart} = useContext(Data)

    const data = [
      { name: 'Call', value: callChart.length, fill: '#222f3e' },
      { name: 'Text', value: textChart.length, fill: '#5f27cd' },
      { name: 'Video', value: videoChart.length, fill: '#218c74' },
    ];

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