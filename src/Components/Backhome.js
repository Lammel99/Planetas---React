import React from 'react'
import BackArrow from '../Assets/BackArrow.svg'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Text = styled.div`
    display: flex;
    
    align-items: center;
    margin: 30px 7.5%;
    font-size: 1.2rem;
    color: #FFFFFF;
    gap: 2px;
    font-weight: lighter;

img{
    margin-right: 5px;
    margin-bottom: 2px;
}
a{
    color: #FFFFFF;
    text-decoration: none;
}
`



const Backhome = (props) => {
  return (
    <Text>
    <img src={BackArrow}></img><Link to={'/home'}>Home</Link>/<p><strong>{props.where}</strong></p>
    </Text>
  )
}

export default Backhome