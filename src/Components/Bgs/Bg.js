import React from 'react'
import styled from 'styled-components';
import bg from "../../Assets/BGplanets.png";


const Bgzada = styled.div`
  background-image: url(${bg});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 100px;`


const Bg = (props) => {
  return (
    <Bgzada>{props.children}</Bgzada>
  )
}

export default Bg