import React, { Fragment } from "react";
import properties from "../../../properties";
import Connection from "../../connection";
import {LineChart, XAxis, YAxis, Tooltip, Legend, Line } from "recharts";

function Sessions({userId, error}) {
	const userSession = Connection(`${properties.api.baseUrl}/${userId}/average-sessions`);
	if (error) return <span>oups!!</span>;
	
	const session = userSession.isLoading ? (
		<div> Téléchargement</div>
	) : (
		<Fragment>
			
			<p>Durée moyenne des sessions</p>
			

			<LineChart
				width={250}
				height={350}
				data={userSession.data.data.sessions}
				margin={{
					right: 5,
					left: 5,
				}}
			>
				<XAxis dataKey="day" tickLine={false} axisLine={false}/>
				<YAxis tickLine={false} hide domain={["dataMin - 50", "dataMax + 50"]}/>
				<Tooltip />
				<Legend verticalAlign="top" />
				<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
			</LineChart>
		</Fragment>
	);
	
		

	return session;

}

export default Sessions;