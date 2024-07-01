import React from 'react'

import '../styles/footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <section className='mailing'>
        <div className='mailing-wrapper'>
          <h2 className='mailing_title'> Join our mailing list!</h2>
          <span> Be the first to know about our community events, promotions, and weekly deals!</span>
          <form
            className='mailing_form'
            action=''
            onSubmit={(ev) => ev.preventDefault()}
          >
            <input
              className='mailing_email'
              type='email'
              name='email'
              placeholder='Your email here' 
              pattern="^[A-Za-z0-9_.+-]+@[A-Za-z0-9]+.[A-Za-z0-9]+$"
            />
            <button type='submit' className='mailing_submit'>
              Join!
            </button>

          </form>
        </div>
      </section>
      <section>

      </section>
    </footer>
  )
}

export default Footer
