import React from "react";
import styled from "styled-components";
import { Mainconteiner, AltContainer } from "../Style";
import Figma from "../images/skillsLogo/figma.png";
import jslogo from "../images/skillsLogo/js-logo.png";
import NodeLogo from "../images/skillsLogo/node-logo.png";
import ReactLogo from "../images/skillsLogo/react.png";
import ReduxLogo from "../images/skillsLogo/redux.png";
import VsCode from "../images/skillsLogo/vscode.png";

const ImgContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 1440px) {
    justify-content: space-around;
    flex-wrap: wrap;
  }
`;
const Baslik = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  /* identical to box height */
  letter-spacing: 0.01em;
  color: #0a0a14;
  text-align: center;
  margin: 3.2rem 0;
`;
const AltYazilar = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  text-transform: uppercase;
  color: #777777;
  margin: 0px;
`;
const Ortlama = styled.div`
  text-align: center;
`;
const Skills = () => {
  return (
    <div id="Skills">
      <Mainconteiner>
        <AltContainer>
          <Baslik>Skills</Baslik>
          <ImgContainer>
            <Ortlama>
              <img src={jslogo} alt="jslogo" />
              <AltYazilar>JAVASCRIPT</AltYazilar>
            </Ortlama>
            <Ortlama>
              <img src={ReactLogo} alt="ReactLogo" />
              <AltYazilar>REACT</AltYazilar>
            </Ortlama>
            <Ortlama>
              <img src={ReduxLogo} alt="ReduxLogo" />
              <AltYazilar>REDUX</AltYazilar>
            </Ortlama>
            <Ortlama>
              <img src={NodeLogo} alt="NodeLogo" />
              <AltYazilar>NODE</AltYazilar>
            </Ortlama>
            <Ortlama>
              <img src={VsCode} alt="VsCode" />
              <AltYazilar>VS CODE</AltYazilar>
            </Ortlama>
            <Ortlama>
              <img src={Figma} alt="Figma" />
              <AltYazilar>FIGMA</AltYazilar>
            </Ortlama>
          </ImgContainer>
        </AltContainer>
      </Mainconteiner>
    </div>
  );
};
export default Skills;
