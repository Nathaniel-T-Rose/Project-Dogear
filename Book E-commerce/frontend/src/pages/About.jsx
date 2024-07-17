import React from 'react'
{/* THIS IS THE ABOUT FOR DOG EAR BOOKS */}
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import '../styles/about.css'

const About = () => {
  return (
    <div className='about'>
      <div className='about-clock'>
        <h1>Thanks for joining us on this journey!</h1>
        <h2>Our shop profile isn't ready quite yet. Check back later for for updates on events, our locations, and to meet our shop dogs!</h2>
        <h3>Time to launch: </h3>
        <FlipClockCountdown
          className='flip-clock'
          to={new Date().getTime() + 622 * 3600 * 1000 + 5221}
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        /> 
      </div>
    </div>
  )
}

export default About
