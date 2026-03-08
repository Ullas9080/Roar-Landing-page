import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Service'
import PreviousEvents from '../components/PreviousEvent'
import Partnership from '../components/Partnership'
import FAQ from '../components/Faq'
import Teams from '../components/Teams'
import Contact from '../components/Contact'
import Footer from '../components/Footer'


const Home = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
<About/>
<Services/>
<PreviousEvents/>
<Partnership/>
<Teams/>
<FAQ/>
<Contact/>
<Footer/>
    </>
  )
}

export default Home