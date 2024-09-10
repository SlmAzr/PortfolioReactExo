import React , { useState } from "react";


export default function List(character) {
  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt={character.name} width="300px"/>
      <p>{`Origin: ${character.origin && character.origin.name}`}</p>
    </div>
  );
}
