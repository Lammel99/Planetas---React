import styled from "styled-components";
import bg from "../../Assets/BgLoginHome.png";
import bgPlanets from "../../Assets/BGplanets.png";

export const BackGroundImg = styled.div`
  background-image: url(${bg});

  background-repeat: no-repeat;
  background-size: cover;
`;

export const BgPlanets = styled.div`
  background-image: url(${bgPlanets});
  padding-bottom: 50px;
  background-repeat: no-repeat;
  background-size: cover;
`;
