import React from 'react'
{/* THIS IS THE ABOUT FOR DOG EAR BOOKS */}
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../styles/about.css'

const About = () => {
  const d1=new Date('2024-08-01')
  const d2= new Date()
  const dif=d1.getTime()-d2.getTime()

  return (
    <div className='about'>
      <div className='about-clock'>
        <h1>Thanks for joining us on this journey!</h1>
        <h2>Our shop profile isn't ready quite yet. Check back later for for updates on events, our locations, and to meet our shop dogs!</h2>
        <h3>Time to launch: </h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + dif}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        /> 
      </div>
    </div>
  )
}

export default About
