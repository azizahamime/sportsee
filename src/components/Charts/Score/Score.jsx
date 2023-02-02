import React from "react";
import { PieChart, Pie} from "recharts";
import properties from "../../../properties";
import Connection from "../../connection";

//const renderMiddleShape = [{ name: "middle", value: 100, fill: "#FFFFFF" }];
export default function Score({userId}) {
	const user = Connection(`${properties.api.baseUrl}/${userId}`);

	if (user.error) return <span>oups!!</span>;
	const CustomTooltip = ({cx,cy, payload }) => {
		let score = payload.payload.score;
		return (
			<g>
				<text x={cx-20} y={cy-20}  fill="black"  dominantBaseline="central" >
					{score * 100}% 				
				</text>
				<text x={cx-60} y={cy+10}  fill="black"  dominantBaseline="central">
					de votre objectif
				</text>
			</g>
			
		);
	};
	const score = user.isLoading ? (
		<div> chargement </div>
	):(
		<PieChart width={258} height={320}>
			<text
				x={45}
				y={35}
				fill="#20253A"
				textAnchor="middle"
				dominantBaseline="central"
			>	
				Score
			</text>
			<Pie
				data={[{ score:user.data.data.score }]}
				dataKey="score"
				fill="#ff0000"
				startAngle={90}
				innerRadius={80}
				outerRadius={90}
				cx="50%" cy="50%" 
				cornerRadius={50}
				label
			/>
			<Pie
				data={[{ score:user.data.data.score }]  }
				dataKey={"score"}
				cx="50%"
				cy="50%"
				outerRadius={80}
				stroke="none"
				fill="#ffffff"
				name="middle"
				label={CustomTooltip}
				
			/>
				
			
			

		</PieChart>
	);
	return score;

}