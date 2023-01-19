import React from "react";
import {  useParams } from "react-router-dom";
import Connection from "../../components/connection";



export default function Profil() {
  const { error, data, isLoading } = Connection();
  let user;
  let { userId } =  useParams();
  isLoading ? (
    <span> oups</span>
  ):(
     user = data.users.filter((el) => el.id === userId)
  );
  

  
  
  
  console.log(data.users);
  console.log(userId);
  

  if (error) return <span> oups!! il y a un probléme</span>;

  return (
    <main>
      <h1> Bonjour  </h1>


    </main>

  )
}