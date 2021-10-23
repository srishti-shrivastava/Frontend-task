import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./answerpage.css";

const answerpage = () => {
  return (
    <div className="main-content">
      <div className="main-content-wrapper">
        Tags:{" "}
        <span className="main-span">
          <button className="main-button" type="button">
            Apperance
          </button>
          <button className="main-button" type="button">
            Family
          </button>
          <button className="main-button" type="button">
            Friends
          </button>
        </span>
      </div>
      <div className="card-content">
        <p className="card-content-p">
          {" "}
          Parents & family are important. However, I am keen to know their role
          in saying 'yes' to us being a couple if we decide to be in a relation
        </p>
        <div className=" ">
            <div>
          <Card className="main-card">
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
          </div>
          <div >
          <Card className="main-card">
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
          </div>
          <div >
          <Card className="main-card"> 
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
          </div>
        </div>

        <div className="main-content-button">
          <button className="submit-button" type="button">Submit</button>
        </div>
      </div>
    </div> 
  );
};

export default answerpage;
