import React from "react";
import styled from "styled-components";
import Logo from "../images/Adsız.png";
import { HashLink as Link } from "react-router-hash-link";
const Mainconteiner = styled.div`
  width: 1440px;
  margin: 0 auto;
`;
const Navigator = styled.div`
  width: 1440px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  @media (max-width: 1470px) {
    width: 95%;
  }
  @media (max-width: 760px) {
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;
const Yonlendirme = styled.li`
  display: flex;
  text-decoration: none;
  padding: 5px;
  @media (max-width: 760px) {
    font-size: 14px;
    padding: 1px;
  }
`;
const Liste = styled.ul`
  display: flex;
  align-items: center;
`;
const Logoss = styled.img`
  width: 35%;
  margin: 0;
  @media (max-width: 760px) {
    width: 75px;
  }
`;
const Linkss = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 5px;
  margin: 5px;
  &:hover,
  &:focus {
    color: red;
    border: 1px solid #3730a3;
    border-radius: 6px;
  }
  &:active {
    border: 1px solid #3730a3;
    border-radius: 6px;
    color: blue;
  }
`;

const NavBar = () => {
  return (
    <div id="Header">
      <Mainconteiner>
        <Navigator>
          <Link smooth to="#Header">
            <Logoss src={Logo} alt="Logo"></Logoss>
          </Link>
          <Liste>
            <Yonlendirme>
              <div>
                <Linkss smooth to="#Skills">
                  Skills
                </Linkss>
              </div>
            </Yonlendirme>
            <Yonlendirme>
              <Linkss smooth to="#Profile">
                Profile
              </Linkss>
            </Yonlendirme>
            <Yonlendirme>
              <Linkss smooth to="#Project">
                Project
              </Linkss>
            </Yonlendirme>
            <Yonlendirme>
              <Linkss smooth to="#Hireme">
                Hire me
              </Linkss>
            </Yonlendirme>
          </Liste>
        </Navigator>
      </Mainconteiner>
    </div>
  );
};
export default NavBar;
