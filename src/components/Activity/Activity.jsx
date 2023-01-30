import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from "recharts";
import properties from "../../properties";
import Connection from "../connection";

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

export default function Activity({userId, error}) {
	
	const userActivity = Connection(`${properties.api.baseUrl}/${userId}/activity`);
	if (error) return <span>oups!!</span>;
	//if (userActivity.isLoading){console.log(userActivity.data.data.sessions);}
	//(isLoading) ? console.log("true")  : console.log("false");
	//(userActivity.isLoading) ? console.log("true")  : console.log("false");
	//console.log(userActivity.data.data.sessions, userId);

	
	const activity = userActivity.isLoading ? (
		<div> chargement </div>
	):(
		
		<BarChart 
			width={750} 
			height={250} 
			barSize={3} 
			barGap="8"
			barCategoryGap="20%" 
			margin={{ top: 0, right: 30, left: 20, bottom: 5 }}
			data={userActivity.data.data.sessions}
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
			<CartesianGrid strokeDasharray="3" vertical={false} />
			<XAxis 
				dataKey="day" 
				fontSize={14}
				tickMargin={15}
				tickLine={false}
				padding={{ right: -37, left: -34 }}
			/>
			<YAxis
				orientation="right" 
				axisLine={false} 
				tickLine={false} 
			/>
			<Tooltip  content={<CustomTooltip />} wrapperStyle={{ outline: "none" }}/>
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

	return activity;
	
}