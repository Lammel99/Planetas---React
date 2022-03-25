import React from 'react'
import styled from 'styled-components'
import bg from '../Assets/BgLoginHome.png'

const BackGroundImg = styled.div`
background-image: url(${bg});
width: 100%;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
`


const BgLoginAndHome = (props) => {
  return (
    <BackGroundImg>{props.children}</BackGroundImg>
      )
}

export default BgLoginAndHome