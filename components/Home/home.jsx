import React from 'react'
/* import "@/components/Home/home.css" */
import "./home.css"

function home() {
  return (
    <div className='mainContainer'>
        <section className='sectionOne'>
            <div className='firstSection'>
                <button className='button'>Search for places</button>
                <div className='location'>
                    <img src="./location.svg" alt="Location" className='locationboton' />
                </div>
            </div>
            <div className='mainImage'>
                <img src="Shower.png" alt="weather image" className='firstImagen'/>
            </div> 
        </section>
        {/* Section number Two */}
        <section className='sectionTwo'>
            <h1 className='number'>15</h1>
            <h3 className='grados'>°C</h3> 
        </section>
        <section className='sectionThree'>
            <h1 className="details">Shower</h1>
        </section>
        <section className='sectionFour'>
            <p className='day'>Day</p>
            
            <p className='date'>Date </p>
        </section>
        <section className='sectionFive'>
            <div>
                <img src="/geo.svg" alt="imagen" />
            </div>
            <p>Ubicacion</p>
        </section>
        <section>

        </section>

    </div>
  )
}

export default home