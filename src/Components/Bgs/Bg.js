import React from 'react'
import { BgPlanets } from './Style'




const Bg = (props) => {
  return (
    <BgPlanets>{props.children}</BgPlanets>
  )
}

export default Bg