import React from 'react'
import homeIcon from "./icons/home.png"
import facebookIcon from "./icons/fb-icon.png"
import linkedIcon from "./icons/linkedin.png"
import githubIcon from "./icons/github.png"
import msgIcon from "./icons/hangout.png"

// this is only visible when the screen size is small
export default function Navbar() {
  return (
    <div className='navbar'>
        <img src={homeIcon} alt="home"></img>
        <img src={msgIcon} alt="home"></img>
        <img src={linkedIcon} alt="home"></img>
        <img src={githubIcon} alt="home"></img>
        <img src={facebookIcon} alt="home"></img>
    </div>
  )
}
