import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { Heroslider } from '@/components/Heroslider'
import { ExploreCatagorie, ExploreProducts, StoreunderSection } from '@/components/Sectionview'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      
      
      
      <Navbar/>
      <Heroslider/>
      <StoreunderSection/>
      <ExploreCatagorie/>
      <ExploreProducts/>
      <Footer/>
     
    </main>  )
}
