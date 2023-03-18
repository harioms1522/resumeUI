import React from 'react'

export default function Contactme({contacts}) {
  return (
    <div className='content-box'>
        <div className='heading'>
                <h2>Contact Me</h2>
            </div>
            <div className='contacts'>
              <p className='header'>Hi there, We can get in contact....</p> 
              <p>Please email any query at @<a className='secondary-color' href={`mailto:${contacts.email}`}>{contacts.email}</a></p>
            </div>
    </div>
  )
}
