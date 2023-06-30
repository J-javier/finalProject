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
                    <img src="./location.svg" alt="Location" />
                </div>
            </div>
            <div className='imagen'>
                <img src="Shower.png" alt="weather image" />
            </div> 
        </section>
        {/* Section number Two */}
        <section className='sectionTwo'>
            <h1 className='number'>15</h1>
            <h3 className='grados'>C</h3>
        </section>
        <section>
            <h3 className="details">Shower</h3>
        </section>
        <section>
            <p>Day</p>
            <p>DATE</p>
        </section>
        <section>
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