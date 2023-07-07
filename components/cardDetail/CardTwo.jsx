import React from 'react'
import "./CardTwo.css"

function CardTwo() {
  return (
    <>  
        <div className='contenerdorPrincipal'>
            
            {/* First Section */}
            <section className='firstSectionn'>
                <p className='subTitle'>Wind Status</p>
                <div className='medida'>
                    <h1 className='numero'>7</h1>
                    <p className='tipoMedicion'>mph</p>
                </div>
                <div className='row'>
                    <div className='rowNav'>
                        <img src="./geogra.svg" alt="navegation" className='imagenRow' />
                    </div>
                    <p className='rowMed'>WSW</p>
                </div>
            </section>
            {/* Second Section */}
            <section className='secondSection'>
                <p className='subTitle'>Humidity</p>
                <div className='pruebaa'>
                    <h1 className='numero'>84</h1>
                    <p className='tipoMedicion'>%</p>
                </div>
                <section className='fondo'>
                    <div>
                        <div className='numerosdebarra'>
                            <p>0</p>
                            <p>50</p>
                            <p>100</p>
                        </div>
                        <div className='structure'>
                            <div className='colorbarra'> </div>
                        </div>
                        <div className='mainporcentaje'>
                            <p className='porcentaje'>%</p>
                        </div>  
                    </div>
                </section>    
            </section>
            

            {/* Third Section */}
            <section className='sectionTres'>
                <p className='subTitle'>VISIBILITY</p>
                <div className='medida'>
                    <h1 className='numero'>6,4</h1>
                    <p className='tipoMedicion'>MILES</p>
                </div>
            </section>
            {/* Four Section */}
            <section className='sectionCuatro'>
                <p className='subTitle'>Air Pressure</p>
                <div className='medida'>
                    <h1 className='numero'>998</h1>
                    <p className='tipoMedicion'>mb</p>
                </div>
            </section>            
        </div>
    </>
  )
}

export default CardTwo