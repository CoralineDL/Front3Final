import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {

  const [character, setCharacter] = useState({})
  const { id } = useParams()
  console.log(id)
  const url = 'https://rickandmortyapi.com/api/character/' + id
  useEffect(() => {
    const fetchCharacter = async () => {
      const res = await axios(url)
      setCharacter(res.data)
      // axios(url)
      // .then(res => setCharacter(res.data))
    }
    fetchCharacter()
  }, [])

  return (
    <div>
      <h3>{character.name}</h3>
      <img src={character.image} alt="" />
      <h1>{character.location?.name}</h1>
      <h3>{character.status}</h3>
    </div>
  )
}

export default Detail