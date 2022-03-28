import React from 'react'
import BackArrow from '../../Assets/BackArrow.svg'
import {Link} from 'react-router-dom'
import {Text} from './Style'



const Backhome = (props) => {
  return (
    <Text>
    <img src={BackArrow}></img><Link to={'/home'}>Home</Link>/<p><strong>{props.where}</strong></p>
    </Text>
  )
}

export default Backhome