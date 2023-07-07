"use client"
import React from 'react'
/* import "@/components/Home/home.css" */
import "./home.css"
import NavBar from '../NavBar/NavBar'
import  {useState}  from 'react'

function home() {
  const [Bar, setBar]  = useState(false)
  function ChangeBar(){
    setBar()
  }


  return ( 
    <div className='mainContainer'>
            { Bar === false ? ( <> 
        <section className='sectionOne'>
            <div className='firstSection'>
                <button className='button' onClick={ChangeBar}>Search for places</button>
                <div className='location'>
                    <img src="./location.svg" alt="Location" className='locationboton' />
                </div>
            </div>
            <div className='mainImage'>
                <img src="Shower.png" alt="weather image" className='firstImagen'/>
            </div> 
        </section>
     
        <section className='sectionTwo'>
            <h1 className='number'>15</h1>
            <h3 className='grados'>°C</h3> 
        </section>
        <section className='sectionThree'>
            <h1 className="details">Shower</h1>
        </section>
        <section className='sectionFour'>
            <p className='day'>Day</p>
            <span>.</span>
            <p className='date'>Date </p>
        </section>
        <section className='sectionFive'>
            <div>
                <img src="/geo.svg" alt="imagen" className='logoOne'/>
            </div>
            <p>Ubicacion</p>
        </section>
        <section>

        </section>
        </>
) : (<NavBar/>)}
    </div>
  )
}

export default home