import React from 'react'
import "./CardTwo.css"

function CardTwo() {
  return (
    <>
        <div className='contenerdorPrincipal'>
            {/* First Section */}
            <section>
                <p className='subTitle'>Wind Status</p>
                <div className='medida'>
                    <h1 className='numero'>7</h1>
                    <h3 className='tipoMedicion'>mph</h3>
                </div>
                <div>
                    <div>
                        <img src="./row.svg" alt="navegation" />
                    </div>
                    <p className='tipoMedicion'>WSW</p>
                </div>
            </section>
            {/* Second Section */}
            <section>
                <p className='subTitle'>Humidity</p>
                    <div>
                        <h1 className='numero'>84%</h1>
                        {/* <h3>mph</h3> */}
                    </div>
                    <div>
                        <div>
                            <div></div>
                        </div>
                        
                    </div>    
            </section>
            {/* Third Section */}
            <section>
                <p className='subTitle'>VISIBILITY</p>
                <div className='medida'>
                    <h1 className='numero'>6,4</h1>
                    <p className='tipoMedicion'>MILES</p>
                </div>
            </section>
            {/* Four Section */}
            <section>
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