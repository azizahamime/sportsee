import React from 'react';

import { 
	RadialBarChart,
	PolarAngleAxis,
	RadialBar,
	Legend,
	ResponsiveContainer
} from 'recharts';

/**
 * [Score is a function that returns a radial bar chart, polar angle axis, radial bar, and texts]
 * @param {Array} userMain  array of object contains the score's value .
 * @returns {JSX.Element} A radial bar chart
 */
export default function Score({data}) {
	const RenderLegend = () => (
		<div className="score-container">
			<span className="score">{data[0].Score * 100}%</span>
			<p className="description">de votre </p>
			<p className="description"> objectif</p>
		</div>
	);
	return (
		<ResponsiveContainer width="100%" height="100%">	
			<RadialBarChart
				cx="50%"
				cy="50%"
				style={{ backgroundColor: '#FBFBFB', borderRadius: '5px' }}
				innerRadius="70%"
				outerRadius="90%"
				barSize={15}
				data={data}
				startAngle={90}
				endAngle={450}
			>
				<text
					x={30}
					y={20}
					fill="black"
					textAnchor="middle"
					dominantBaseline="left"
				>
					<tspan fontSize="18px" fontWeight="500" >
          Score
					</tspan>
				</text>
				<circle cx="50%" cy="50%" fill="#fff" r="85"></circle>
				<PolarAngleAxis type="number" domain={[0, 1]} tick={false} />
				<RadialBar
					minAngle={15}
					dataKey="score"
					fill="red"
					cornerRadius={20}
				/>
				<Legend
					width={120}
					height={120}
					layout="vertical"
					verticalAlign="middle"
					align="center"
					content={<RenderLegend />}
				/>
			</RadialBarChart>
		</ResponsiveContainer>
	);
}