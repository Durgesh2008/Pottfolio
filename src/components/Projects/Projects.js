import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Note from "../../Assets/Projects/notebook.jpg";
import Sorting from "../../Assets/Projects/sorting.png";
import Admin from "../../Assets/Projects/Admin.png";
import chat from '../../Assets/Projects/chat.jpg'
import News from '../../Assets/Projects/newsmonkey.jpg'

const ProjectData = [
  {
    id: 'a1',
    imgPath: Note,
    title: "Inotebook",
    description: "This is a Full Stack Chatting App. Uses Socket.io for real-time communication and stores user details in encrypted format in MongoDB Database.",
    ghLink: "https://github.com/Durgesh2008/Inotebook"
  },
  {
    id: 'a2',
    imgPath: Sorting,
    title: "Sorting Visulizer",
    description: "A JavaScript web application for visualizing various sorting algorithms. It was built for use by developers and educators alike.",
    ghLink: "https://github.com/Durgesh2008/sortingVisulizer",
    demoLink: "https://sortingvisulizer.netlify.app/"
  },
  {
    id: "a3",
    imgPath: Admin,
    title: "Admin Student Record Portal",
    description: "This project entails creating an administrator portal for efficient student record management and certificate generation. Administrators can login, sign up, and perform essential tasks like adding, deleting, viewing, and updating student data, as well as generating student certificates. This system simplifies administrative processes and enhances student  management.",
    ghLink: "https://github.com/Durgesh2008/AdminOfStudent"
  },
  {
    id: "a4",
    imgPath: chat,
    title: "ChatUp",
    description: "This is a Full Stack Chatting App. Uses Socket.io for real-time communication and stores user details in encrypted format in Mongo DB Database.",
    ghLink: "https://github.com/Durgesh2008/chatapp",
    demoLink: "https://64ac5325a494d72192eae551--aesthetic-narwhal-18dd71.netlify.app/",
  },
  {
    id: 'a5',
    imgPath: News,
    title: "NewsINDIA",
    description: "This React app utilizes the News API to gather and present real-time news content. Offering an immersive news-reading experience, it provides users with up-to-date information and headlines from various sources, making it a convenient and informative news application.",
    ghLink: "https://github.com/Durgesh2008/NewsMonkey",

  },

]
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {ProjectData && ProjectData.map((ele) => {
            return (
              <Col md={4} key={ele.id} className="project-card">
                <ProjectCard
                  imgPath={ele.imgPath}
                  isBlog={false}
                  title={ele.title}
                  description={ele.description}
                  ghLink={ele.ghLink}
                  demoLink={ele.demoLink}

                />

              </Col>
            )
          })}




        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
