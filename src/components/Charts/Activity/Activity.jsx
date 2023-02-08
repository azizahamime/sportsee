import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from 'recharts';


const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip">
				<p className="weight tooltip_item">{`${payload[0].value}`}kg</p>
				<p className="calories tooltip_item">{`${payload[1].value}`}kcal</p>
			</div>
		);
	}
	return null;
};

const customDay = (day) =>{
	return Number(day.slice(8));
};

export default function Activity({data}) {
	console.log(data);
	return(
		<BarChart 
			width={750} 
			height={250} 
			barSize={3} 
			barGap={8}
			data={data}
		>
			<text
				x={100}
				y={14}
				fill="black"
				textAnchor="middle"
				dominantBaseline="central"
			>
				<tspan fontSize="18px" fontWeight="500">
          Activité quotidienne
				</tspan>
			</text>
			<CartesianGrid strokeDasharray="2 2" vertical={false} />
			<XAxis 
				dataKey="day" 
				//type='number'
				fontSize={14}
				tickMargin={15}
				tickLine={false}
				padding={{ right: -45, left: -38 }}
				tickFormatter={customDay}

			/>
			<YAxis
				orientation="right"
				dataKey='calories' 
				axisLine={false} 
				tickLine={false}
				padding={{ right: 40 }}
			/>
			<Tooltip  content={<CustomTooltip />} wrapperStyle={{ outline: 'none' }}/>
			<Legend 
				verticalAlign="top"
				align="right"
				iconType="circle"
				iconSize={9}
				height={80}
			/>
			<Bar 
				dataKey="kilogram" 
				name="Poids (kg) " 
				fill="#282D30"
				barSize={7} 
				radius={[3,3,0,0]} 
			/>
			<Bar 
				dataKey="calories" 
				name="Calories brûlées (kCal)" 
				fill="#E60000" 
				barSize={7} 
				radius={[3,3,0,0]} 
			/>
		</BarChart>				
	);

	
	
}