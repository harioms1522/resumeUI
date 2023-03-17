import React from 'react'
import linkedIcon from "./icons/linkedin.png"
import githubIcon from "./icons/github.png"
// this is only visible when the screen size is small
export default function Navbar() {
  return (
    <div className='navbar'>
        <a href='https://linkedin.com/in/harioms152'><img src={linkedIcon} alt="linkedin" /></a>
        <a href='https://github.com/harioms1522'><img src={githubIcon} alt="linkedin"/></a>
    </div>
  )
}
