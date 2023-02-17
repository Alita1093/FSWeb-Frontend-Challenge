import React from "react";
import styled from "styled-components";
import github from "../images/github.png";
import linkedIn from "../images/LinkedIn.png";
import MainPho from "../images/MainPho.jpg";
const Mainconteiner = styled.div`
  width: 1440px;
  margin: 0px auto;
  background: #f4f4f4;
  padding: 4rem 0;
  @media (max-width: 1470px) {
    width: 95%;
    font-size: 32px;
  }
`;

const TanıtımMesajı = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 42px;
  line-height: 64px;
  color: #0a0a14;
  width: 66%;

  @media (max-width: 760px) {
    width: 95%;
    font-size: 22px;
  }
`;
const Selam = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  letter-spacing: 0.1em;
  margin: 0px;
  padding-bottom: 30px;
  padding-top: 30px;
  @media (max-width: 1470px) {
    width: 95%;
    font-size: 32px;
    padding-bottom: 30px;
    padding-top: 90px;
  }
  @media (max-width: 760px) {
    width: 95%;
    font-size: 22px;
    padding-bottom: 30px;
    padding-top: 60px;
  }
`;
const Fotograf = styled.div`
  width: 30.6%;
`;
const Tanıtım = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    width: 95%;

    flex-direction: column;
    align-items: center;
  }
`;
const AltContainer = styled.div`
  width: 75.6%;
  margin: 0 auto;
`;
const Yazılar = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  @media (max-width: 760px) {
    width: 95%;
    text-align: center;
    font-size: 16px;
  }
`;
const Logolar = styled.div`
  display: flex;
  gap: 20px;
  @media (max-width: 760px) {
    width: 95%;
    justify-content: space-between;
  }
`;
const Kirmizilar = styled.span`
  color: #af0c48;
`;
const MainPhoto = styled.img`
  width: 100%;
  border-radius: 22px;
  box-shadow: -0.7rem -0.7rem 0 5px #e92577;
`;
const Header = () => {
  return (
    <div id="Header">
      <Mainconteiner>
        <AltContainer>
          <Selam>Selam</Selam>
          <Tanıtım>
            <TanıtımMesajı>
              I'm Furkan. I'm a full-stack developer. I can craft solid and
              scalable frontend products. Let’s meet!
            </TanıtımMesajı>
            <Fotograf>
              <MainPhoto src={MainPho} alt="logo" />
            </Fotograf>
          </Tanıtım>
          <Logolar>
            <a
              href="https://www.linkedin.com/in/furkan-%C3%B6zt%C3%BCrk-64912b102/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} alt="Linkedin" />
            </a>
            <a
              href="https://github.com/Alita1093"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github} alt="github" />
            </a>
          </Logolar>
          <Yazılar>
            Currently <Kirmizilar> Freelancing </Kirmizilar>{" "}
            <Kirmizilar>for UX,UI,& Web Design</Kirmizilar> Project.
          </Yazılar>
          <Yazılar>
            Invite me to join your team{" "}
            <Kirmizilar> furkanozturk1635@gmail.com</Kirmizilar>
          </Yazılar>
        </AltContainer>
      </Mainconteiner>
    </div>
  );
};
export default Header;
