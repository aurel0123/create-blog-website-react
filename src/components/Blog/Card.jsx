import React from 'react'
import dataCard from './dataCard'; 
import './Card.css'; 

export const Card = () => {
  return (
    <div className='Card-top grid3'>
        {
            dataCard.map((value) =>(
                <div key={value.id} className='box'>
                    <div className="img">
                        <img src={value.cover} alt="" />
                    </div>
                    <div className="text">
                        <span>{value.category}</span>
                        <h2>{value.title}</h2>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
