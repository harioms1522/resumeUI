import React from 'react'
import {FaAtom} from "react-icons/fa"

export default function ModalBox({isHidden, data, toggleModal, index}) {

    const renderDetailPoints = function(points){
        return points.map((point, index)=>{
            return (
                <div key={index} className='modal-detail-point'>{point}</div>
            )
        })

    }
    
    const renderDetailItems = function(details){
        return details.map((detail)=>{
            console.log(detail)
            return (
                <div className='modal-detail-item' key={detail.name}>
                    <h1 className='modal-detail-header'>{detail.name}</h1>
                    <div className='modal-detail-points'>
                        {detail.points.length > 0 ? renderDetailPoints(detail.points) : ""}
                    </div>
                </div>
            )
        })
    }

    const renderDetails = function(data){
        if(!data.details){
            return ""
        }else{
            return (
                <div className='modal-details'>
                    {data.details && data.details.length>0 ? renderDetailItems(data.details) : data.details}
                </div>
            )
        }

    }

    return (
        <div className={`side-modal ${isHidden ? "hidden-modal" : "" }  modal`} >   
            {data.icon ? <img src={data.icon ? data.icon : "" } className="modal-icon" alt=""/> : ""}
            <FaAtom className="fas fa-check-circle close-modal" onClick={()=>{toggleModal(index)}} />
            <h1 className='modal-header'>{data.name}</h1>
            <p className='modal-description'>{data.description}</p>
            <hr></hr>
            {data.details ? renderDetails(data) : ""}
            {data.image ? <img src={data.image} alt="project screenshot" className='modal-img'/> : ""}
        </div>
    )
}
