import React from "react";
import {
  Row,
  Col,
  FooterContainer,
  Link,
  Logo
} from "./styles";

import logo from '../img/logo_dm.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export const Footer = () => {

  return (
    <FooterContainer>
      <Row theme={{align: 'space-between'}}>
        <Col><Link href='https://github.com/dorian-morones/get-kuotes' target='_blank'><FontAwesomeIcon icon={faGithub} /></Link></Col>
        <Col><Link href='https://kanye.rest/' target='_blank'>API</Link></Col>
        <Col><Link href='https://dorianmorones.com/' target='_blank'><Logo src={logo} alt='DM_logo' /></Link></Col>
      </Row>
    </FooterContainer>
  );
};
