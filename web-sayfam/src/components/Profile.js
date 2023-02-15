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
  width: 250%;
  padding: 41px;
  @media (max-width: 760px) {
    width: 95%;
    text-align: center;
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
`;
const AboutMeparag = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  letter-spacing: 0.01em;
  padding: 15px;
  width: 95%;
  margin: 0px;
`;
const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Profile = () => {
  return (
    <div id="Profile">
      <MainconteinerGrey>
        <AltContainer style={{ paddingBottom: "75px" }}>
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
              <AboutMe>About me</AboutMe>
              <AboutMeparag>
                Gün içerisinde sosyal medyada gördüğünüz reklamların birbirine
                benzer oluşu sizin de canınızı sıkmıyor mu? Aynı markaymış gibi
                birbirini tekrar eden pazarlama stratejileri gerçekten de etkili
                olabilir mi? Zaman içerisinde markaların sosyal medya kullanımı
                konusunda özensiz davranmaya başladığını düşünüyorum. Böyle bir
                ortamda da özgün içerikler üreterek geniş kitlelere hitap etmek
                zorlaşabiliyor.
              </AboutMeparag>
            </AboutContainer>
          </ProfileFlex>
        </AltContainer>
      </MainconteinerGrey>
    </div>
  );
};
export default Profile;
