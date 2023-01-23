import React from "react";
import {  useParams } from "react-router-dom";
//import Connection from "../../components/connection";



export default function Profil() {
  const { id } = useParams();

  console.log (id);
  
  return (
    <main>
      <h1> Bonjour  </h1>

      
    </main>

  )
}