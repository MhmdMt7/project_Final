
import About from '../componets/home/About'
import Doctors from '../componets/home/Doctors'
import Footer from '../componets/home/Footer'
import Header from '../componets/home/Header'
import Hero from '../componets/home/Hero'
import Services from '../componets/home/Services'

export default function Home() {
  return (
    <div className='w-full h-full'>
        <Header/>
        <Hero/>
        <About/>
        <Services/>
        <Doctors/>
        <Footer/>
    </div>
  )
}
