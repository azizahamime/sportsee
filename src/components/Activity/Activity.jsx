import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from "recharts";
import properties from "../../properties";
import Connection from "../connection";

export default function Activity({userId}) {
	
	const { isLoading, error} = Connection(`${properties.api.baseUrl}/${{userId}}/activity`);
	const userActivity = Connection(`${properties.api.baseUrl}/${userId}/activity`);
	if (error) return <span>oups!!</span>;
	
	console.log(userActivity.data.data.sessions);

	
	{isLoading ?(
		<div> chargement </div>
	):(
		<BarChart width={730} height={250} data={userActivity.data.data.sessions}>
			<CartesianGrid strokeDasharray="2 3" />
			<XAxis dataKey="day" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="poids(kg)" fill="#282D30" />
			<Bar dataKey="Calories brûlées (kCal)" fill="#E60000" />
		</BarChart>
	);}
		
	
}