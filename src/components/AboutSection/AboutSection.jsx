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
          src='/images/achieveWomen.png' 
          className='aboutImage'
          ref={aboutImageRef} 
          width={750} height={450}/>
      </div>
      <div className="aboutRight">
        <div className="header">
          Achievements
        </div>
        <div className="body">
        1.<strong>Indira Gandhi:</strong> India's first female Prime Minister, known for her leadership during a crucial period in Indian history.
        <br></br>2.Mother Teresa: Renowned for her humanitarian work, she founded the Missionaries of Charity and received the Nobel Peace Prize.
        <br></br>3.PV Sindhu: The first Indian woman to win an Olympic silver medal in badminton, showcasing her exceptional talent and determination.
        <br></br>4.Kiran Bedi: The first woman to join the Indian Police Service (IPS) and known for her exemplary work in law enforcement.       </div>
        <div className="button">
        </div>
      </div>
    </section>
  )
}

export default AboutSection
