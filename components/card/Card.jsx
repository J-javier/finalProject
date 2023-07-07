import React from 'react'
import "./card.css"


/* async function getdata(){
  try {
    const response = await fetch ("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=8b5e798bde5cc7b55691b9ca16d8923c")
    const data = await response.json() 
    console.log(data.list[0].main)
    return data.list[0].main
  } catch (error) {
    console.log(error)
  }
} 
 */
 
function Card() {
  return (
    <>
    <section className='main_container'>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'>
              <img src="./Clear.png" alt="picture"  className='imagenCard'/>
            </div>
            <div className='details'>
              <p>16 °C</p>
              <p className='min'>11 °C</p>
            </div>
        </div>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'>
              <img src="./Clear.png" alt="picture"  className='imagenCard'/>
            </div>
            <div className='details'>
              <p>16 °C</p>
              <p className='min'>11 °C</p>
            </div>
        </div>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'>
              <img src="./Clear.png" alt="picture"  className='imagenCard'/>
            </div>
            <div className='details'>
              <p>16 °C</p>
              <p className='min'>11 °C</p>
            </div>
        </div>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'>
              <img src="./Clear.png" alt="picture"  className='imagenCard'/>
            </div>
            <div className='details'>
              <p>16 °C</p>
              <p className='min'>11 °C</p>
            </div>
        </div>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'>
              <img src="./Clear.png" alt="picture"  className='imagenCard'/>
            </div>
            <div className='details'>
              <p>16 °C</p>
              <p className='min'>11 °C</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Card