import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am{" "}
            <span className='purple'>Nurdin Muhamad Topan </span>
            from <span className='purple'> Bhubaneswar, India.</span>
            <br />
            I am a Backend Developer.
            <br />
            I have an experience more than 1 year
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
            <li className='about-activity'>
              <ImPointRight /> Reading Tech News
            </li>
            <li className='about-activity'>
              <ImPointRight /> Studying
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Nothing is impossible, the word itself says 'I'm possible'!"{" "}
          </p>
          <footer className='blockquote-footer'>Nurdin</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
