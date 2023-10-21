import NavigationBar from "./components/NavigationBar/NavigationBar"
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import AboutSection from './components/AboutSection/AboutSection'
import ServicesSection from './components/ServicesSection/ServicesSection'
import ChooseUsSection from './components/ChooseUsSection/ChooseUsSection'
import ReviewsSection from './components/ReviewsSection/ReviewsSection'
import DownloadSection from './components/DownloadSection/DownloadSection'
import Footer from "./components/Footer/Footer"
import ABC from "./components/ABC/ABC"
import XYZ from "./components/XYZ/XYZ"
// import { NavBar } from './components/NavBar/Navbar'
import './index.css'

function App() {
  return (
    <div className="App">
      {/* <NavBar/> */}
      <NavigationBar/>
      <WelcomeSection/>
      <AboutSection/>
      <ServicesSection/>
      <ABC/>
      <XYZ/>
      {/* <ChooseUsSection/> */}
      <ReviewsSection/>
      {/* <DownloadSection/> */}

      <Footer/>
    </div>
  )
}

export default App
