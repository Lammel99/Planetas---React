
import styled from 'styled-components'
import bg from '../../Assets/BgLoginHome.png'
import bgPlanets from '../../Assets/BGplanets.png'


export const BackGroundImg = styled.div`
background-image: url(${bg});
width: 100%;
height: 100vh;
background-repeat: no-repeat;
background-size: cover;
`


export const BgPlanets = styled.div`
  background-image: url(${bgPlanets});
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 100px;`