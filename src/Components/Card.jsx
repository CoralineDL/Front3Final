import React from 'react'
import { Link } from 'react-router-dom'
import { useCharStates } from '../Context/Context'

const Card = ({item}) => {

  const {favs, dispatch} = useCharStates()

  const findFav = favs.find((fav) => fav.id == item.id)

  const addFav = () => {
    if(findFav){
      alert('Ese personaje ya está agregado a favoritos')
    } else {
      dispatch({type: 'ADD_FAV', payload: item})
    }
  }

  return (
    <div>
      <div className='ecard'> 
        <Link to={'/detail/' + item.id}>
          <h4>{item.name}</h4>
          <img src={item.image} alt="" />
        </Link>
        <button onClick={addFav}>{findFav ? '🌟' : '⭐'}</button>
      </div>
    </div>
  )
}

export default Card