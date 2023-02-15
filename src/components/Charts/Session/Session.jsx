import React  from 'react';
import {LineChart, XAxis, YAxis, Tooltip, Line, Rectangle, CartesianGrid } from 'recharts';
import PropTypes from 'prop-types';



/**
 * [CustomTooltip is a function that returns a red frame with the data contained in it]
 * @param {Object} props containing active and payload
 * @param {boolean} active indicates whether the tooltip should be displayed or not
 * @param {array} payload an array of data objects containing the values to be displayed in the tooltip
 * @returns {JSX}} A custom tooltip
 */
const CustomTooltip = ({ active, payload }) => {
	//console.log(payload);
	if (active) {
		return (
			
			<p className="customTooltipSession" 
				style={{
					background: '#FFFFFF',
					color: '#000000',
					fontSize :'12',
					fontWeight: '500'

				}}
			>{`${payload[0].value}`} min</p>
			
		);
	}
	return null;
};

CustomTooltip.propTypes = {
	active: PropTypes.bool,
	payload: PropTypes.array,
};


const CustomCursor = ({ points }) => {
	console.log(points);
	return (
		<Rectangle
			fill="#000000"
			opacity={0.2}
			x={points[1].x}
			y={-100}
			width={1000}
			height={1000 }

		/>
	);
};
CustomCursor.propTypes = {
	points: PropTypes.array,
};


/**
 * [daySemaine is a function which generates the days of the week]
 * @param {number} day - A number representing the day of the week (1 for Monday, 2 for Tuesday, etc.)
 * @returns {string} A string representation of the day of the week (L for Monday, M for Tuesday, etc.)
 */

function daySemaine(day) {
	switch (day) {
	case 1:
		return 'L';
	case 2:
		return 'M';
	case 3:
		return 'M';
	case 4:
		return 'J';
	case 5:
		return 'V';
	case 6:
		return 'S';
	case 7:
		return 'D';

	default:
		throw new Error('Numéro du jour incorrect');
	}
}

/**
 * @function Sessions
 * @param {Object} data - An object containing user session data
 * @returns {{JSX.Element}} A line chart displaying user session data
 */
export default function Sessions({data}) {
	return(
		
		<LineChart
			width={500}
			height={300}
			data={data}
			style={{  borderWidth: '10' }}
			
			margin={{
				top: 5,
				right: 30,
				left: 20,
				bottom: 5,
			}}
		>
			<text
				x={40}
				y={20}
				fill="#fff"
				//textAnchor="middle"
				//dominantBaseline="center"
				className='lineChartTitle'
			>
				
        Durée moyenne des sessions
				
			</text>
			
			<CartesianGrid vertical={false} horizontal={false} />
			<XAxis 
				dataKey="day" 
				type='number'
				domain={[1, 7]}
				tickCount="7"

				tickLine={false} 
				axisLine={false}
				tickFormatter={daySemaine}    
				fillOpacity={0.6  }
				//style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }} 
				tick={{ fill: '#FFFFFF', fontWeight: 500, fontSize: 12,margin:20 , }}
				tickMargin={20}
                
			/>
			<YAxis tickLine={false} hide domain={['dataMin - 5', 'dataMax + 5']}/>
			<Tooltip 
				content={<CustomTooltip />} 
				cursor={<CustomCursor />}
				wrapperStyle={{
					outline: 'none',
				}}
					
			/>
			<Line 
				type="natural" 
				dataKey="sessionLength" 
				stroke="#FFF" 
				dot = {false}
				activeDot={{ r:6 }} 
				strokeWidth={2}
				margin ={{bottom: 20}}
					
					
			/>
		</LineChart>
	);	
}
Sessions.propTypes = {
	data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
