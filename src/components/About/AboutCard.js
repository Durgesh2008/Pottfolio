import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Durgesh Kumar</span> from
            <span className="purple"> Uttar Pradesh, India.</span>
            <br />
            I completed my graduation in Information Technology from 2019 to
            2023.
            <br />
            Additionally, I completed my internship at Shoppeal Tech Pvt. Ltd.
            (OPC). I have 1 year of experience in the field of web development,
            and I am currently working as a Frontend Developer at Blue Sparing
            Services in Jaipur.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight />
              Watching Movies
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
