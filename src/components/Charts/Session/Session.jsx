import React, { Fragment } from 'react';
import {LineChart, XAxis, YAxis, Tooltip, Line, Rectangle, CartesianGrid } from 'recharts';



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


const CustomCursor = ({ points }) => {
	return (
		<Rectangle
			fill="#000000"
			opacity={0.2}
			x={points[1].x}
			width={1000}
			height={700 }

		/>
	);
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
		<Fragment>
			<p className='lineChartTitle'> Durée moyenne des sessions</p>
			<LineChart
				width={250}
				height={100}
				data={data}
				style={{ backgroundColor: '#FF0000', borderWidth: '10' }}
				margin={{
					right: 5,
					left: 5,
				}}
			>
				<CartesianGrid vertical={false} horizontal={false} />
				<XAxis 
					dataKey="day" 
					tickLine={false} 
					axisLine={false}
					tickFormatter={daySemaine}    
					fillOpacity={0.6  }
					style={{ transform: 'scale(0.9)', transformOrigin: 'bottom' }} 
					tick={{ fill: '#FFFFFF', fontWeight: 500, fontSize: 12 }}
					tickMargin={10}
					interval="preserveStartEnd"
                
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
					
					wrapperStyle={{
						background: 'linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.106534) 100%)',
					}}
					
				/>
			</LineChart>
		</Fragment>
		
	);	
}
