import React from 'react';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';



/**
 * [CustomTooltip is a function that returns a red frame with the data contained in it]
 * @param {Object} props containing active and payload
 * @param {boolean} active indicates whether the tooltip should be displayed or not
 * @param {array} payload an array of data objects containing the values to be displayed in the tooltip
 * @returns {JSX}} A custom tooltip
 */

const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div className="tooltip"
				style={{
					backgroundColor: '#E60000',
					color: '#FFFFFF',
					fontSize: '7px',
					fontWeight: '500',
					textAlign: 'center',
					lineHeight: '24px',
					fontStyle: 'normal',
					width: '39px',
					height: '63px'
				}}>
				<p className="weight tooltip_item">{`${payload[0].value}`}kg</p>
				<p className="calories tooltip_item">{`${payload[1].value}`}kcal</p>
			</div>
		);
	}
	return null;
};

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};

/**
 * [customDay is a function that returns the last two characters of the day string as a number]
 * @param {string} day - a string representing a day
 * @returns {number} the last two characters of the day string as a number
 */
const customDay = (day) =>{
	return Number(day.slice(8));
};
/**
 * [RenderLegend is a function that returns the legende
 * @param {array} payload an array of data objects
 * @returns {jsx} the legende content
 */

const RenderLegend = ({ payload }) => (
	<div className="activity-legend-container">
		<span className="activity-title">Activité quotidienne</span>
		<span className="flex-1"></span>
		{payload.map((entry, index) => (
			<div className="activity-legend" key={`activity-legend-${index}`}>
				<div
					className="legend-circle"
					style={{ backgroundColor: entry.color }}
				></div>
				<span className="activity-legend-title">{entry.value}</span>
			</div>
		))}
	</div>
);

RenderLegend.propTypes = {
	payload: PropTypes.array,
};

/**
 * @component Activity bar chart component.
 * @param {array} data - An array of objects representing the data for the chart. Each object has properties for day, kilogram, and calories.
 * @returns {JSX.Element} A bar chart displaying the daily user's weight and calories.
 *
 */
export default function Activity({data}) {
	return(
		<ResponsiveContainer className="activity" width="100%" height="100%">
			<BarChart 
				title='Activité quotidienne'
				width={500} 
				height={300} 
				barSize={7} 
				barGap={8}
				data={data}
				margin={{
					top: 5,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				{/*<text
					x={100}
					y={5}
					fill="black"
					textAnchor="middle"
					dominantBaseline="central"
			>
					<tspan fontSize="18px" fontWeight="500">
          Activité quotidienne
					</tspan>
				</text>*/}
				<CartesianGrid strokeDasharray="2 2" vertical={false} />
				<XAxis 
					dataKey="day" 
					//type='number'
					fontSize={14}
					tickMargin={15}
					tickLine={false}
					//padding={{ right: -45, left: -38 }}
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
					wrapperStyle={{width:'100%'}}
					content ={RenderLegend}
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
		</ResponsiveContainer>		
	);	
}
Activity.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};