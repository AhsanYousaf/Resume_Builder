import React from 'react'
import {ArrowDown} from 'react-feather'
import './Body.css'

const Body = () => {
  
  const colors = ["#239ce2","#48bb78","#0bc5ea","#a0aec0","#ed8936"];
  
  return (
    <div className='body-container'>
      <p className='body-heading'>Resume Builder</p>
      <div className='body-toolbar'>
        <div className='body-colors'>
          {
            colors.map((item) => {
              return(
              <span 
              key={item}
              className='body-color'
              style={{ backgroundColor: item }}
              />)
            })
          }
        </div>
        <button>Download <ArrowDown /></button>
      </div>
    </div>
  )
}

export default Body
