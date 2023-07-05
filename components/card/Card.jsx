import React from 'react'
import "./card.css"


async function getdata(){
  try {
    const response = await fetch ("http://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=8b5e798bde5cc7b55691b9ca16d8923c")
    const data = await response.json() 
    console.log(data.list[0].main)
    return data.list[0].main
  } catch (error) {
    console.log(error)
  }
}


/* async  */function Card() {
  /* const data = await getdata(); */
  /* console.log(data.tem) */
  return (
    <>
    <section className='main_container'>
        <div className='container'>
            <p>Tomorrow</p>
            <div className='imagen'><img src="./Clear.png" alt="picture"  className='imagenCard'/></div>
            <div className='details'>
                {/* <p>{`${data.temp_max} °C`}</p>
                <p>{`${data.temp_min} °C`} </p> */}
            </div>
        </div>
    </section>
    </>
  )
}

export default Card