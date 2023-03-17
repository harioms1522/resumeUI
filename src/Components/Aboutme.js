import React, { useState } from 'react'
import ModalBox from './ModalBox'

export default function Aboutme({aboutMe}) {
  const [hideModal, setHideModal] = useState(true)

  const toggleModal = function(){
    setHideModal(!hideModal)
  }

  return (
    <div className='about-me content-box'>
            <div className='heading'>
              <h2>About me!</h2>
              <button className='btn' onClick={toggleModal}> C V </button>
              <ModalBox data={aboutMe} isHidden={hideModal} toggleModal={toggleModal} index=""/>
            </div>
            <p className='about-details'>{aboutMe.description}</p>
    </div>
  )
}
