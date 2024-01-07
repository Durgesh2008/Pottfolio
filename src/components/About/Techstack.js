import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import { TbBrandReactNative } from "react-icons/tb";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiGithub,

} from "react-icons/di";
import {

  SiFirebase,
  SiNextdotjs,
  SiTypescript,

} from "react-icons/si";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
       
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <p className="fs-5">Javascript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript />
        <p className="fs-5">Typescript</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
        <p className="fs-5">Node js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <p className="fs-5">React js</p>
      </Col>
     
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        <p className="fs-5">MongoDB</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <p className="fs-5">Next Js</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
        <DiGithub/>
        <p className="fs-5">Git & GitHub</p>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <p className="fs-5">Firebase</p>
      </Col>
    
     
      <Col xs={4} md={2} className="tech-icons">
      <TbBrandReactNative />
       <p className="fs-5">React Native</p>
      </Col>
      
    </Row>
  );
}

export default Techstack;
