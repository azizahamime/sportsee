import React, { Fragment } from "react";
import {  useParams } from "react-router-dom";
import Connection from "../../components/connection";
import properties from "../../properties";
import calories from "../../assets/calories-icon.svg";
import proteines from "../../assets/protein-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import fat from "../../assets/fat-icon.svg";
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, Line, LineChart, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadialBarChart, RadialBar  } from "recharts";



export default function Profil() {
	const { id } = useParams();
	const { data, error, isLoading} = Connection(`${properties.api.baseUrl}/${id}`);
	const user = Connection(`${properties.api.baseUrl}/${id}`);
	const userActivity = Connection(`${properties.api.baseUrl}/${id}/activity`);
	const userSession = Connection(`${properties.api.baseUrl}/${id}/average-sessions`);
	const userPerformance = Connection(`${properties.api.baseUrl}/${id}/performance`);

	

	console.log(data.data);
	

	if (error) return <div> oups il y a un probléme !!</div>;
  
	return (
		<main>
			<div className="container">
				{isLoading ?(
					<div> Téléchargement</div>
				):(
					<Fragment>
						<div className="profil-header">
							<h1> Bonjour <span className="name">{user.data.data.userInfos.firstName}</span></h1>
							<p> Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
						</div>
						<div className="profile-body">
							
							<div className="charts">
								<div className="activity">
									
									
									<BarChart width={730} height={250} data={userActivity.data.data.sessions}>
										<CartesianGrid strokeDasharray="2 3" />
										<XAxis dataKey="day" />
										<YAxis />
										<Tooltip />
										<Legend />
										<Bar dataKey="kilogram" fill="#282D30" />
										<Bar dataKey="calories" fill="#E60000" />
									</BarChart>
									

								</div>
								<div className="mini-charts">
									<div className="sessions">

										
										<LineChart
											width={500}
											height={300}
											data={userSession.data.data.sessions}
											margin={{
												top: 5,
												right: 30,
												left: 20,
												bottom: 5,
											}}
										>
											<CartesianGrid strokeDasharray="3 3" />
											<XAxis dataKey="day" />
											<YAxis />
											<Tooltip />
											<Legend verticalAlign="top" />
											<Line type="monotone" dataKey="sessionLength" stroke="#8884d8" activeDot={{ r: 8 }} />
												
										</LineChart>
										

									</div>
									<div className="performance">

										<RadarChart cx="50%" cy="50%" outerRadius="80%" data={userPerformance.data.data}>
											<PolarGrid />
											<PolarAngleAxis dataKey="kind" />
											<PolarRadiusAxis />
											<Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
										</RadarChart>

									</div>
									<div className="score">

										<RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data.data}>
											<RadialBar
												minAngle={15}
												label={{ position: "insideStart", fill: "#000" }}
												background
												clockWise
												dataKey="todayScore"
											/>
											<Legend iconSize={10} layout="vertical" verticalAlign="middle"  />
										</RadialBarChart>
									</div>
								</div>
							</div>
							<div className="nutrition">
								<div className="calories">
									<img src={calories} alt="calories" />
									<div>
										<p className="amount">{data.data.keyData.calorieCount}</p>
										<p className="name">Clories</p>
									</div>
								</div>
								<div className="proteines">
									<img src={proteines} alt="proteines" />
									<div>
										<p className="amount">{data.data.keyData.proteinCount}</p>
										<p className="name">Proteines</p>
									</div>
								</div>
								<div className="glucides">
									<img src={carbs} alt="glucides" />
									<div>
										<p className="amount">{data.data.keyData.carbohydrateCount}</p>
										<p className="name">Glucides</p>
									</div>
								</div>
								<div className="lipides">
									<img src={fat} alt="lipides" />
									<div>
										<p className="amount">{data.data.keyData.lipidCount}</p>
										<p className="name">Lipides</p>
									</div>
								</div>
							</div>						
						</div>
					</Fragment>
				)}

			</div>
		</main>
	);
}