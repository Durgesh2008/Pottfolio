import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";

import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <svg role="img"  fill="#ffffff" width={50} height={30} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>deepin</title><path d="M16.104.696c-1.724-.63-3.49-.8-5.205-.64-1.988.157-2.958.772-2.9.661-3.251 1.16-6 3.657-7.272 7.157-2.266 6.234.944 13.128 7.168 15.398 6.228 2.27 13.111-.945 15.378-7.179C25.54 9.86 22.33 2.966 16.104.696zM8.305 22.145a10.767 10.767 0 0 1-1.867-.904c2.9.223 6.686-.445 9.239-2.834 0 0 4.866-3.888 1.345-10.269 0 0 .568 2.572-.156 4.687 0 0-.69 2.877-3.757 3.712-4.517 1.231-9.664-1.93-11.816-3.463-.162-1.574-.018-3.2.56-4.788.855-2.352 2.463-4.188 4.427-5.42-.49 3.436-.102 6.6.456 7.925.749 1.777 2.05 3.85 4.59 4.115 2.54.267 3.94-2.11 3.94-2.11 1.304-1.98 1.508-4.823 1.488-4.892-.02-.07-.347-.257-.347-.257-.877 3.549-2.323 4.734-2.323 4.734-2.28 2.201-3.895.675-3.895.675-1.736-1.865-.52-4.895-.52-4.895.68-2.064 2.66-5.084 4.905-6.62.374.092.75.15 1.12.284a10.712 10.712 0 0 1 3.554 2.16c-1.641.599-4.291 1.865-4.291 1.865-4.201 1.77-4.485 4.446-4.485 4.446-.435 2.758 1.754 1.59 1.754 1.59 2.252-1.097 3.359-4.516 3.359-4.516-.703-.134-1.257.08-1.257.08-.899 2.22-2.733 3.132-2.733 3.132-.722.382-.89-.293-.89-.293-.122-.506.522-.592.522-.592 1-.389 1.639-1.439 1.784-1.868.144-.43.412-.464.412-.464a12.998 12.998 0 0 1 2.619-.535c1.7-.209 4.303.602 4.303.602.584.235 1.144.41 1.641.551.954 2.384 1.105 5.098.16 7.7-2.039 5.61-8.236 8.504-13.841 6.462z"/></svg>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineFundProjectionScreen
                  style={{ marginBottom: "2px" }}
                />{" "}
                Projects
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>

            
            <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/Durgesh2008"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
