import React, {useState} from 'react'
import {FaArrowRight} from "react-icons/fa"
import ModalBox from './ModalBox'

export default function Certificates({certificates}) {

    const [showProjectModalIndex, setShowProjectModalIndex] = useState(-1);

    const toggleModal = function(index){
        setShowProjectModalIndex( showProjectModalIndex===index ? -1 : index )
    }


    const renderCertificates = function(){
        return (
            certificates.map((cert,index)=>{
                return (<div className='certCard' index={index}>
                    <div className='header'>{cert.name}</div>
                    <div className='actions'>
                        <FaArrowRight onClick={()=>{toggleModal(index)}}/>
                    </div>
                    <div className='body'>
                        {cert.description.slice(0,40)} ...
                    </div>
                    <ModalBox data={cert} index={cert.name} toggleModal={toggleModal} isHidden={showProjectModalIndex===index ? false : true}/>
                </div>)
            })
        )
    }


    return (
        <div className='content-box'>
            <div className='heading'>
                <h2>Certificates and Acknowledgements</h2>
                <div className='certificates'>
                    {
                        renderCertificates()
                    }
                </div>
            </div>
        </div>
    )
}
