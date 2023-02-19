import React from 'react'
import AnimalCard from './AnimalCard'
import { nanoid } from "nanoid";

function List({items=[]}) {
  return (
   <>
   <h2>Meet the animals</h2>
    <ul>
     {items.map((animal) => 
     (<AnimalCard key={nanoid()} {...animal} />))}
    </ul>
   </>

  )
}

export default List