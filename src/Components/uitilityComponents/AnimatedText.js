import React  from 'react'

export default function AnimatedText({children, speed}) {
  return (
      <span className='animated-text'>
          {
              children.split("").map((char,i)=>{
                  const style = {"animation-delay": `${0.5+ i/(speed || 10)}s`}
                  return (
                  <span
                    aria-hidden="true"
                    key={i}
                    style={style}
                  >
                    {char}
                  </span>)
                })
          }
      </span>
  )
}
