import React from 'react'

export default function Skillbar({level}) {
  return (
    <div className='skill-bar'>
        {/* <span className='bar-basis'></span> */}
        <span className='bar-level' style={{width: level*100+`%`}}></span>
        <p>{level*100}%</p>
    </div>
  )
}
