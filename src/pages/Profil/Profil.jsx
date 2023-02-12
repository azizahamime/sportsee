import React, { Fragment } from 'react';
import {  useParams } from 'react-router-dom';
import Connection from '../../components/connection';
import properties from '../../properties';
import calories from '../../assets/calories-icon.svg';
import proteines from '../../assets/protein-icon.svg';
import carbs from '../../assets/carbs-icon.svg';
import fat from '../../assets/fat-icon.svg';
import Activity from '../../components/Charts/Activity/Activity';
import Session from '../../components/Charts/Session/Session';
import Performances from '../../components/Charts/Performances/performances';
import Score from '../../components/Charts/Score/Score';

/**
 * @component Profil Elements to display on the Profil page.
 * @returns {JSX.Element} Profil page's containt
 *
 */


export default function Profil() {
	const { id } = useParams();
	const { data, error, isLoading} = Connection(`${properties.api.baseUrl}/${id}`);
	const user = Connection(`${properties.api.baseUrl}/${id}`);
	const userActivity = Connection(`${properties.api.baseUrl}/${id}/activity`);
	const userSession = Connection(`${properties.api.baseUrl}/${id}/average-sessions`);
	const userPerformance = Connection(`${properties.api.baseUrl}/${id}/performance`);

	if (error) return <div> oups il y a un probléme !!</div>;
	if (userActivity.error) return <div> oups il y a un probléme !!</div>;
	if (userSession.error) return <div> oups il y a un probléme !!</div>;
	if (userPerformance.error) return <div> oups il y a un probléme !!</div>;
  
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
									{userActivity.isLoading ?(
										<div> Télechargement </div>
									):(
										<Activity data={userActivity.data.data.sessions} />
									)}
								</div>

								<div className="mini-charts">

									<div className="sessions">
										{userSession.isLoading ?(
											<div> Télechargement </div>
										):(
											<Session  data = {userSession.data.data.sessions} />
										)}										
									</div>

									<div className="performance">
										{userPerformance.isLoading ?(
											<div> Télechargement </div>
										):(
											<Performances  data={userPerformance.data.data.data} />
										)}
									</div>

									<div className="score">
										{user.isLoading ?(
											<div> Télechargement </div>
										):(
											<Score  data = {[{score:user.data.data.score || user.data.data.todayScore}]} />
										)}
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