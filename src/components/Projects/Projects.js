import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Sorting from "../../Assets/Projects/sorting.png";
import Admin from "../../Assets/Projects/Admin.png";
import chat from '../../Assets/Projects/chat.jpg'
import News from '../../Assets/Projects/newsmonkey.jpg'
import shop from '../../Assets/Projects/welcome.png'
import safekaro from '../../Assets/Projects/safekaro.png'
const ProjectData = [
  {
    id: "a7",
    imgPath:safekaro ,
    title: "Safe karo",
    description: "Developed a comprehensive insurance platform with unique motor policy features, integrating functionalities from Policy Bazaar and Acko. Designed efficient APIs for smooth operations and built a user-friendly frontend interface, streamlining policy creation and booking for multiple user roles",
    demoLink: "https://admin.safekaro.com/",
  },

  {
    id: "a6",
    imgPath: shop,
    title: "Ecommerce Mern stack",
    description: "Created a personal MERN E-commerce app with a user-friendly interface, intelligent search, advanced filters, and seamless shopping cart. The admin portal allows easy product and category management, offering insights into user activity for a personalized experience. Developed using React.js for the UI, Node.js, and Express.js for robust server-side operations, and a scalable MongoDB database.",
    ghLink: "https://github.com/Durgesh2008/ServerEcom",
    demoLink: "https://dk-ecommerce.netlify.app/",
  },
  {
    id: "a5",
    imgPath: chat,
    title: "ChatUp",
    description: "This is a Full Stack Chatting App. Uses Socket.io for real-time communication and stores user details in encrypted format in Mongo DB Database.",
    ghLink: "https://github.com/Durgesh2008/chatapp",
    demoLink: "https://chatapp-qfk3.onrender.com/",
  },
  
  {
    id: "a4",
    imgPath: Admin,
    title: "Admin Student Record Portal",
    description: "This project entails creating an administrator portal for efficient student record management and certificate generation. Administrators can login, sign up, and perform essential tasks like adding, deleting, viewing, and updating student data, as well as generating student certificates. This system simplifies administrative processes and enhances student  management.",
    ghLink: "https://github.com/Durgesh2008/AdminOfStudent"
  },
  {
    id: 'a3',
    imgPath: Sorting,
    title: "Sorting Visulizer",
    description: "A JavaScript web application for visualizing various sorting algorithms. It was built for use by developers and educators alike.",
    ghLink: "https://github.com/Durgesh2008/sortingVisulizer",
    demoLink: "https://sortingvisulizer.netlify.app/"
  },
 
  
  {
    id: 'a2',
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
          My  <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "start", paddingBottom: "10px" }}>

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
