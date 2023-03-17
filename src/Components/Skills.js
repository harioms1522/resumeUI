import React, { useState } from 'react'
import ModalBox from './ModalBox'
import Skillbar from './Skillbar';

export default function Skills({skills}) {

    const [showSkillModalIndex, setShowSkillModalIndex] = useState(-1);

    const toggleModal = function(index){
        setShowSkillModalIndex( showSkillModalIndex===index ? -1 : index )
    }

    const renderSkills = function(){
        return skills.map((skill,index) => {
            return <div className='skill-box' key={index}>
                <h3>{skill.name}</h3>
                {/* <i className={skill.icon ? skill.icon : 'fa-light fa-share-node'}></i> */}
                {/* will create a bar here */}
                <Skillbar level={skill.level} />
                <ModalBox data={skill} index={index} toggleModal={toggleModal} isHidden={showSkillModalIndex===index ? false : true} />
                <button className='btn' onClick={()=>{toggleModal(index)}}>More...</button>
            </div>
        })

    }

    return (
        <div className='content-box'>
            <div className='heading'>
                <h2>Skills</h2>
            </div>
            <div className='skills'>
                {renderSkills()}
            </div>
        </div>
    )
}
