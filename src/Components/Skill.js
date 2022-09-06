import React from 'react'
import '../Components/styles.css'

const Skill = (props) => {
  return (
    <div className='skills'>
        <img src={props.image} alt={props.name} />
        <h4>{props.name}</h4>
    </div>
  )
}

export default Skill