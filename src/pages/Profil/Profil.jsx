import React, { Fragment } from "react";
import {  useParams } from "react-router-dom";
import Connection from "../../components/connection";
import properties from "../../properties";
import calories from "../../assets/calories-icon.svg";
import proteines from "../../assets/protein-icon.svg";
import carbs from "../../assets/carbs-icon.svg";
import fat from "../../assets/fat-icon.svg";




export default function Profil() {
	const { id } = useParams();
	const { data, error, isLoading} = Connection(`${properties.api.baseUrl}/${id}`);

	console.log (id);
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
							<h1> Bonjour <span className="name">{data.data.userInfos.firstName}</span></h1>
							<p> Félicitation ! Vous avez explosé vos objectifs hier 👏 </p>
						</div>
						<div className="profile-body">
							
							<div className="charts">
								<div className="activity"></div>
								<div className="mini-charts">
									<div className="sessions"></div>
									<div className="performance"></div>
									<div className="score"></div>
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