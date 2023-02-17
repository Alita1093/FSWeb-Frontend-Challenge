import React from "react";
import styled from "styled-components";
import { AltContainer, Mainconteiner } from "../Style";
import { ProjectsData } from "./data";
const Baslik = styled.h2`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 44px;
  text-align: center;
  letter-spacing: 0.01em;
`;
const ProjectBox = styled.div`
  background: #ddeefe;
  border-radius: 12px;
  padding: 2rem;
  width: 40%;
`;
const ProjectConteiner = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 760px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`;
const ProjectConteinerBaslik = styled.h4`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 29px;
  line-height: 39px;
  letter-spacing: 0.05em;
  color: #000000;
`;
const ProjectAciklama = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
  width: 85%;
`;
const ProjectPrograms = styled.div`
  display: flex;
  align-items: center;
  padding: 6px 20px 10px;
  gap: 10px;
  width: 81px;
  height: 32px;
  background: #ffffff;
  border-radius: 76px;
  justify-content: space-evenly;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 9;
  font-size: 16px;
  line-height: 100%;
  @media (max-width: 760px) {
    width: 30%;
    text-align: center;
  }
`;
const DisplayPrograms = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  @media (max-width: 760px) {
    width: 95%;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;
const ProgramsElement = styled.p`
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 100%;
  display: flex;
  align-items: center
  letter-spacing: 0.05em;
  color: #000000;
  justify-content: space-evenly;
 
`;
const Foto = styled.div`
  display: flex;
  justify-content: center;
`;
const Links = styled.div`
  display: flex;
  justify-content: space-between;
`;
const AltLink = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 150%;
  @media (max-width: 760px) {
    font-size: 16px;
  }
`;
const LinkYonlendirme = styled.a`
  text-decoration: none;
  color: black;
`;
const Imaj = styled.img`
  width: 95%;
  position: relative;

  @media (max-width: 760px) {
    width: 95%;
    text-align: center;
  }
`;
const Projects = () => {
  return (
    <div id="Project">
      <Mainconteiner>
        <AltContainer>
          <Baslik>Projects</Baslik>
          <ProjectConteiner>
            {ProjectsData.map((item) => (
              <ProjectBox key={item.key}>
                <ProjectConteinerBaslik>{item.baslik}</ProjectConteinerBaslik>
                <ProjectAciklama>{item.aciklama}</ProjectAciklama>
                <DisplayPrograms>
                  {item.kullanilanProgramlar.map((x) => (
                    <ProjectPrograms>
                      <ProgramsElement key={x}>{x}</ProgramsElement>
                    </ProjectPrograms>
                  ))}
                </DisplayPrograms>
                <Links>
                  <AltLink>
                    <LinkYonlendirme
                      href={item.GithubLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on Github
                    </LinkYonlendirme>
                  </AltLink>
                  <AltLink>
                    <LinkYonlendirme
                      href={item.verserLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Go to app
                    </LinkYonlendirme>
                  </AltLink>
                </Links>
                <Foto>
                  <Imaj src={item.foto} alt=""></Imaj>
                </Foto>
              </ProjectBox>
            ))}
          </ProjectConteiner>
        </AltContainer>
      </Mainconteiner>
    </div>
  );
};
export default Projects;
