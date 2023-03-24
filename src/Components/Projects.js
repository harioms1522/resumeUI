import React, {useState} from 'react'
import ModalBox from './ModalBox'
import gitIcon from "../Components/icons/git.png"
import {FaArrowRight} from "react-icons/fa"

export default function Projects({projects}) {

    const [showProjectModalIndex, setShowProjectModalIndex] = useState(-1);

    const toggleModal = function(index){
        setShowProjectModalIndex( showProjectModalIndex===index ? -1 : index )
    }

    const renderProjects = function(){
        return projects.map((project, index)=>{
            return (
                <div className='project-box' key={index}>
                    <h3 className='heading'>{project.name}</h3>
                    <p className='more' onClick={()=>{toggleModal(index)}} ><FaArrowRight/></p>
                    <p className='description'>{project.description.slice(0,40)} ...</p>
                    <ModalBox data={project} index={index} toggleModal={toggleModal} isHidden={showProjectModalIndex===index ? false : true} />
                    {/* Will have a overlay that rotates on hover to show git links */}
                        {
                        project.srcCode ? 
                            <div className='demo'> 
                                <a href={project.srcCode} rel="noreferrer" target="_blank"><img src={gitIcon} alt="git" className='source-icon'/></a> 
                            </div> 
                            : 
                            ""
                        }
                    {project.tags ? 
                        <div className='tag-pill'>
                            <p>{project.tags}</p>
                        </div> : ""}
                </div>
            )
        })
    }

    return (
        <div className='content-box'>
            <div className='heading'>
                <h2>Projects</h2>
            </div>
            <div className='projects'>
                {renderProjects()}
            </div>
        </div>
    )
}
