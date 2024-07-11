
import Brands from './components/brands-section/Brands'
import Destinations from './components/destinations-section/Destinations'
import Footer from './components/footer/Footer'
import Hero from './components/hero-section/Hero'
import Navbar from './components/navigation-bar/Navbar'
import Services from './components/services-section/Services'
import TravelDetails from './components/travels-section/TravelDetails'
import main2 from './assets/main2.png'
import main3 from './assets/main3.png'

function App() {

  return (
    <>
        <Navbar/>
        <Hero/>
        <Brands/>
        <Services/>
        <Destinations/>
        <TravelDetails
          image={main2}
          title={'We helping you find your dream location'}
          subTitle={'TRAVEL POINT'}
          isFeatures={false}
        />
        <TravelDetails
          image={main3}
          title={'We offer best services'}
          subTitle={'KEY FEATURES'}
          isFeatures={true}
        />
        <Footer/>
    </>
  )
}

export default App
