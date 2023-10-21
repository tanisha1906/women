import { useEffect, useRef } from 'react'
import './AboutSection.scss'

const AboutSection = () => {
  const aboutImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(aboutImageRef.current)
  }, [])

  return (
    <section className='aboutSection'>
      <div className="aboutLeft">
        <img 
          src='/images/womengovt.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          Government Schemes
        </div>
        <div className="body">
        1.Swadhar Greh Scheme:Provides institutional support for rehabilitation of women in difficult circumstances.
    Aims to help them lead dignified lives. <a href="https://www.india.gov.in/spotlight/swadhar-greh-scheme">Swadhar Greh Scheme</a> 
    <br></br>2.Ujjawala Scheme:Focuses on preventing trafficking and rehabilitating victims of commercial sexual exploitation. <a href="https://wcd.nic.in/schemes/ujjawala-comprehensive-scheme-prevention-trafficking-and-rescue-rehabilitation-and-re">Ujjawala Scheme</a> 
    <br></br>3.Working Women Hostel Scheme:Offers safe accommodation with daycare facilities for working women, especially in urban and semi-urban areas. <a href="https://dwcd.karnataka.gov.in/page/Contact+us/Working+Women%E2%80%99s+Hostel+List/en://www.w3schools.com">Working Women Hostel Scheme</a> 
    <br></br>4.Beti Bachao Beti Padhao (BBBP) Scheme:Launched to address declining Child Sex Ratio and empower girls and women over their life cycle. <a href="https://www.myscheme.gov.in/schemes/bbbp">Beti Bachao Beti Padhao (BBBP) Scheme</a> </div>
        <div className="button">
        </div>
      </div>
    </section>
  )
}

export default AboutSection
