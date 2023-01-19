import React from "react";
import Connection from "../../components/connection";
import '../../server';


export default function Profil() {
  const { error, data } = Connection();
  console.log(data.users);
  if (error) return <span> oups un probléme</span>;
  return (
    <main>
      <h1> Bonjour </h1>


    </main>

  )
}