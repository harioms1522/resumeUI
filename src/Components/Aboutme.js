import React, { useState } from 'react'
import ModalBox from './ModalBox'
import AnimatedText from "./uitilityComponents/AnimatedText"

export default function Aboutme({aboutMe}) {
  const [hideModal, setHideModal] = useState(true)

  const toggleModal = function(){
    setHideModal(!hideModal)
  }

  return (
    <div className='about-me content-box'>
            <div className='heading'>
              <div className='header'>
                <h2>About me!</h2>
                <button className='btn cvbutton' onClick={toggleModal}> C V </button>
              </div>
              <ModalBox data={{...aboutMe, description:aboutMe.description.slice(312)}} isHidden={hideModal} toggleModal={toggleModal} index=""/>
            </div>
            <p className='about-details'><AnimatedText speed="50" className="secondary-color">{aboutMe.description.slice(0,311) + '...'}</AnimatedText></p>
    </div>
  )
}
