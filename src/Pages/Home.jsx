import React from 'react'
import Card from '../Components/Card'
import { useCharStates } from '../Context/Context'

const Home = () => {

  const {list} = useCharStates()

  return (
    <div>
      {list.map(item => <Card item={item} key={item.id}/>)}
    </div>
  )
}

export default Home