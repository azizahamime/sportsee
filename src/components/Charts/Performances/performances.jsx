import React from 'react';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis	
} from 'recharts';

/**
 * [perFormence is a function that returns a string based on a number]
 * @param {number} kind
 * @returns {string} a string corresponding to the number
 */
function perFormence(kind) {
	switch (kind) {
	case 1:
		return 'cardio';
	case 2:
		return 'energy';
	case 3:
		return 'endurance';
	case 4:
		return 'strength';
	case 5:
		return 'speed';
	case 6:
		return 'intensity';
	default:
		return null;
	}
}

/**
 * Renders a radar chart showing user performance data.
 * @param {Array} data - An array of objects representing the value of each kind.
 * @returns {JSX.Element} A radar chart.
 */
export default function Performances({data}){
	return(
		<RadarChart
			cx="50%"
			cy="50%"
			outerRadius="70%"
			data={data}
			width={300}
			height={263}
			//margin={{ top: 10, right: 10, bottom: 10, left: 10 }}	
		>
			<PolarGrid radialLines={false} />
			<PolarAngleAxis
				dataKey="kind"
				tickFormatter={perFormence}
				stroke="#FFF"
				tickLine={false}
				tick={{ fill: '#FFFFFF', fontSize: 12 ,zIndex:'10' }}
				dy={5}	
			/>
			<PolarRadiusAxis tick={false} tickCount={6} axisLine={false} />
			<Radar dataKey="value" fill="#FF0101"  fillOpacity={0.7} />
		</RadarChart>
	);
}