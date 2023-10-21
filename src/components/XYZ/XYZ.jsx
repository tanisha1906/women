import { useEffect, useRef } from "react"
import './XYZ.scss'

const ServicesSection = () => {
  const serviceImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(serviceImageRef.current)
  }, [])

  return (    
    <section className="serviceSection">
      <div className="serviceText">
        <div className="motto">
        List of NGOs
        </div>
        <div className="mottoSubtitle">
        1.Gramin Vikas Evam Chetna Sansthan:Addresses gender disparities, focusing on empowering women in decision-making processes and combating domestic violence.
        <br></br>2.Aarti for Girls:Fights against injustice towards women and children in Andhra Pradesh’s Kadapa area, impacting over 100,000 individuals.
        <br></br>3.Rajasthan Samgrah Kalyan Sansthan (RSKS):A grassroots nonprofit aiding marginalized women and girls, promoting empowerment, livelihood, education, gender equality, and child rights.
        <br></br>4.The Self Employed Women’s Association (SEWA):Founded by Ela Bhatt, SEWA empowers women as part-time employees, advocating for their rights through nonviolent protest techniques. Boasts 1.9 million female members. </div>
        <div className="serviceButtons">
          
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/ngowomen.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
      
    </section>
  )
}

export default ServicesSection
