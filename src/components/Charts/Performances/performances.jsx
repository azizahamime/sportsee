import React from "react";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	
	
} from "recharts";
import Connection from "../../connection";
import properties from "../../../properties";

export default function Performances({userId, error}){
	const userPerformance = Connection(`${properties.api.baseUrl}/${userId}/performance`);
	if (error) return <span>oups!!</span>;
	const performance = userPerformance.isLoading ? (
		<div> chargement </div>
	):(
		
		<RadarChart
			cx="50%"
			cy="50%"
			outerRadius="70%"
			data={userPerformance.data.data.data}
			width={258}
			height={263}
			//margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
			
		>
			<PolarGrid radialLines={false} />
			<PolarAngleAxis
				dataKey="kind"
				stroke="#FFF"
				tickLine={false}
				tickSize="17"
				
				dy={5}
				
			/>

			<Radar dataKey="value" fill="#FF0101" stroke="#FF0101B2" fillOpacity={0.7} />
		</RadarChart>
	);
	return performance;
		
	

}