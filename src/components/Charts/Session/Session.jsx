import React, { Fragment } from 'react';
import {LineChart, XAxis, YAxis, Tooltip, Line, Rectangle, CartesianGrid } from 'recharts';

const CustomTooltip = ({ active, payload }) => {
	//console.log(payload);
	if (active) {
		return (
			
			<p className="customTooltipSession">{`${payload[0].value}`}min</p>
			
		);
	}
	return null;
};

const CustomCursor = ({ points }) => {
	console.log(points[1].x );
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
						background: '#FFFFFF',
						color: '#000000',
						width: '40px',
						height: '25px',
						outline: 'none',
						marginTop: '15',
						fontSize :'14',
						fontWeight: '500'	
					}}
				/>
				<Line 
					type="natural" 
					dataKey="sessionLength" 
					stroke="#FFF" 
					dot = {false}
					activeDot={{ r:6, strokeWidth:2 }} 
				/>
			</LineChart>
		</Fragment>
		
	);	
}
