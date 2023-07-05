import Image from 'next/image'
import styles from './page.module.css'
import Main from "@/components/Home/home"
import Card from '@/components/card/Card'
import CardTwo from '@/components/cardDetail/CardTwo'

export default function Home() {
  return (
    <div className='primero'>
      <Main/> 
        <div className='segundo'>
          <Card/>
          <h1 className='mainTitle'>Today's Highlights</h1>
          <div className='tercero'>
            <CardTwo/>
          </div>
        </div>
      
    </div>
  )
}
