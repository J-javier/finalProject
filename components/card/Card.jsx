import React from 'react'
import "./card.css"

function Card() {
  return (
    <>
    <section className='main_container'>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'><img src="./Clear.png" alt="picture"  className='imagenCard'/></div>
            <div className='details'>
                <p>16 c</p>
                <p>11c </p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Card