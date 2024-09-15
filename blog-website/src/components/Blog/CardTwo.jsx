import React from 'react'
import slidedata from '../Slide/dataS'; 


export const CardTwo = () => {
  return (
    <div className='CardTwo'>
        {
            slidedata.map((val)=>(
                <div className="box">
                    <div className="img">
                        <img src={val.cover} alt="" />
                    </div>
                    <div className="text">
                        <span>{val.category}</span>
                        <h2>{val.title}</h2>
                        <p>{val.desc}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
