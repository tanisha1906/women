import { useEffect, useRef } from 'react'
import './WelcomeSection.scss'

const WelcomeSection = () => {
  const welcomeImageRef = useRef()

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting)
          entry.target.classList.add("fadeIn")
      })
    }, {
      threshold: 0.5
    })
    observer.observe(welcomeImageRef.current)
  }, [])

  return (    
    <section className="welcomeSection">
      <div className="welcomeText">
        <div className="motto">
        Empowering Women: Breaking Barriers and Shaping the Future
        </div>
        <div className="mottoSubtitle">
        A women's community is a group of women who come together to support and connect with each other, often centered around shared interests, experiences, and goals. These communities provide a platform for empowerment, advocacy, and mutual understanding, promoting unity among women from diverse backgrounds.        </div>
        {/* <div className="welcomeButtons">
          <button>Learn More</button>
          <button>Watch Intro Video</button>
        </div> */}
      </div>
      <div className="imageSection">
        <img 
          src='/images/women.png' 
          className='welcomeImage'
          ref={welcomeImageRef} 
          width={576*1.1} height={360*1.1}/>
      </div>
    </section>
  )
}

export default WelcomeSection
