import Image from 'next/image'
import styles from './page.module.css'
import Main from "@/components/Home/home"
import Card from '@/components/card/Card'
import CardTwo from '@/components/cardDetail/CardTwo'

export default function Home() {
  return (
    <section className='raiz'>
      <div className='primero'>
        <Main/>
      </div>

      <div className='Elsegundo'>
          <div className='segundo'>
            <div className='botonesGrados'>
              <span className='butonn'>°C</span>
              <span className='butonn'>°F</span>
            </div>
            <Card/>
            <h1 className='mainTitle'>Today's Highlights</h1>
            <div className='tercero'>
              <CardTwo/>
            </div>
          </div>
      </div> 

      
    </section>
  )
}
