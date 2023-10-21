import { useEffect, useRef } from "react"
import './ServicesSection.scss'

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
        Gender Struggles
        </div>
        <div className="mottoSubtitle">
        1.Discrimination and Bias: Women may face discrimination in various aspects of life, including education, employment, and leadership opportunities, based on their gender.
        <br></br>2.Unequal Pay: Gender pay gap persists in many parts of the world, with women earning less than their male counterparts for equivalent work.
        <br></br>3.Limited Access to Education: In some regions, girls may face barriers in accessing quality education, leading to reduced opportunities for personal and professional growth.
        <br></br>4.Gender-Based Violence: This includes physical, sexual, and emotional abuse, as well as practices like female genital mutilation and child marriage.        </div>
        <div className="serviceButtons">
        </div>
      </div>
      <div className="imageSection">
        <img 
          src='/images/womenstruggle.png' 
          className='serviceImage'
          ref={serviceImageRef} 
          width={515} height={515}/>
      </div>
    </section>
  )
}

export default ServicesSection
