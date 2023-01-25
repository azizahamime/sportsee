import React from "react";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip,Legend, Bar } from "recharts";
import properties from "../../properties";
import Connection from "../connection";

export default function Activity({ide}) {
	const userActivity = Connection(`${properties.api.baseUrl}/${ide}/activity`);
	console.log(userActivity.data.data.sessions);

	return (
		<BarChart width={730} height={250} data={userActivity.data.data.sessions}>
			<CartesianGrid strokeDasharray="2 3" />
			<XAxis dataKey="" />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey="kilogram" fill="#282D30" />
			<Bar dataKey="calories" fill="#E60000" />
		</BarChart>
	);
}