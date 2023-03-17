import React from "react";
import styled from "styled-components";
import { AltContainer, MainconteinerGrey } from "../Style";

const Baslik = styled.h2`
  text-align: center;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
`;
const TemelBilgiler = styled.div`
  background: #ffffff;
  border-radius: 12px;
  width: 170%;
  padding: 41px;
  box-shadow: 9px 8px 0 5px rgba(82, 82, 82, 0.5);
  @media (max-width: 760px) {
    width: 95%;
    text-align: center;
    box-shadow: none;
  }
`;
const AltBaslik = styled.h4`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  color: #ea2678;
  margin: 5px 0;
`;
const BilgiKey = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  @media (max-width: 760px) {
    width: 40%;
    text-align: center;
  }
`;
const BilgiValue = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: 0.01em;
  @media (max-width: 760px) {
    width: 40%;
    text-align: center;
    margin: 0;
  }
`;
const FlexBox = styled.div`
  display: flex;
  gap: 22px;
`;
const ProfileFlex = styled.div`
  display: flex;
  gap: 43px;
  align-items: flex-start;
  @media (max-width: 760px) {
    width: 95%;

    flex-direction: column;
    align-items: center;
    gap: 0px;
  }
`;
const AboutMe = styled.h2`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 32px;
  padding: 45px 15px 0 15px;
  margin: 0px;
  width: 90%;
`;
const AboutMeparag = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  padding: 15px;
  width: 90%;
  margin: 0px;
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Sus = styled.div`
  position: relative;
  width: 90px;
  height: 18px;
  left: 11px;
  top: 80px;
  background: #82bbff;
  border-radius: 4px;
  opacity: 0.5;
`;
const Profile = () => {
  return (
    <div id="Profile">
      <MainconteinerGrey>
        <AltContainer>
          <Baslik>Profile</Baslik>
          <ProfileFlex>
            <TemelBilgiler>
              <AltBaslik>
                Basic Information <br></br>
              </AltBaslik>
              <FlexBox>
                <BilgiKey>
                  <p>Dogum Tarihi </p>
                  <p>Ikamet Şehri</p>
                  <p>Eğitim Durumu </p>
                  <p>Tercih Ettiği Rol </p>
                </BilgiKey>
                <BilgiValue>
                  <p> 16.07.1998</p>
                  <p> Ankara</p>
                  <p> Gazi Üniv Enerji Sistemleri Müh. 2022</p>
                  <p> Frontend UI,</p>
                </BilgiValue>
              </FlexBox>
            </TemelBilgiler>
            <AboutContainer>
              <Sus></Sus>
              <AboutMe>About me</AboutMe>
              <AboutMeparag>
                I'm a nice fun and friendly person, I'm honest and punctual, I
                work well in a team but also on my own as I like to set myself
                goals which I will achieve, I have good listening and
                communication skills. I have a creative mind and am always up
                for new challenges.
              </AboutMeparag>
            </AboutContainer>
          </ProfileFlex>
        </AltContainer>
      </MainconteinerGrey>
    </div>
  );
};
export default Profile;
