import React from "react";
import {  useParams } from "react-router-dom";
import Connection from "../../components/connection";
import properties from "../../properties";



export default function Profil() {
	const { id } = useParams();
	const { data, error, isLoading} = Connection(`${properties.api.baseUrl}/${id}`);

	console.log (id);
	console.log(data.data);
	if (error) return <div> oups il y a un probléme !!</div>;
  
	return (
		<main>
			{isLoading ?(
				<div> Téléchargement</div>
			):(
				<h1> Bonjour {data.data.userInfos.firstName}</h1>

			)}

      
		</main>

	);
}