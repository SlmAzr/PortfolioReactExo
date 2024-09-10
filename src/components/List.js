import React, { useState, useEffect } from 'react'
import Character from './Character'

export default function List() {
    const [characters, setCharacters] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('https://rickandmortyapi.com/api/character');
            const {result} = await data.json();
            setCharacters(result);
        }
    })
  return (
    <div>
        <h2>Characters</h2>
    <Character />
    <Character />
    </div>
  )
}
