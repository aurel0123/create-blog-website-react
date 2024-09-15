import React from 'react'
import { Slide } from '../Slide/slide'
import { Card } from './Card'
import { CardTwo } from './CardTwo'
import { Footer } from '../Footer/Footer'


export const BlogHome = () => {
    /* Creation d'une variable de type json */
    const data =[
        {
            id: 1,
            titleOne: "YOU CAN CHANGE THE WORLD",
            titletwo: "STRONG STYLE",
            paraOne: "How Women are Redirecting Hollywood",
            paraTwo: "New Ways to Wear Denim Belt Bags make a Comeback",
            name: "By Jasmin Smith",
            subTitle: "How to Shop Mindfully",
            qrCode: "/images/qrcode.png",
            cover: "/Images/blog5.jpg",
        }
    ]
  return (
    <section className='home'>
        <div className='Blog-left'>
          {
            data.map((value)=>{
              return (
                <div className="container" key={value.id}>
                  <div className="logo">
                    <h1>M</h1>
                  </div>
                  <div className="home-img">
                    <img src={value.cover} alt="" />
                  </div>
                  <div className="text">
                    <h1>{value.titleOne}</h1>
                    <p>{value.paraOne}</p>
                    <span>{value.name}</span>
                  </div>
                  <div className="text text2">
                    <h1>{value.titletwo}</h1>
                    <p>{value.paraTwo}</p>
                    <span>{value.subTitle}</span>
                  </div>

                  <div className="qrcode">
                    <img src={value.qrCode} alt="" />
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="Blog-right">
          <Slide/>
          <Card/>
          <CardTwo/>
          <Footer/>
        </div>
    </section>
  )
}
