import React from "react";
import styled from "styled-components";
import { Mainconteiner, AltContainer } from "../Style";
import { Data } from "./data";
const Baslik = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 48px;
  line-height: 58px;
  text-align: center;
  margin: 10px;
`;
const AltBaslik = styled.h4`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 28px;
`;
const Icerik = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
`;
const SkillsContainer = styled.div`
  width: 33%;
  @media (max-width: 760px) {
    width: 55%;
  }
`;
const SkillsFlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  @media (max-width: 760px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
  }
`;
const Skills = () => {
  return (
    <div id="Skills">
      <Mainconteiner>
        <AltContainer>
          <Baslik>Skills</Baslik>
          <SkillsFlexBox>
            {Data.map((item) => (
              <SkillsContainer key={item.key}>
                <AltBaslik>{item.baslik}</AltBaslik>
                <Icerik>{item.icerik}</Icerik>
              </SkillsContainer>
            ))}
          </SkillsFlexBox>
        </AltContainer>
      </Mainconteiner>
    </div>
  );
};
export default Skills;
