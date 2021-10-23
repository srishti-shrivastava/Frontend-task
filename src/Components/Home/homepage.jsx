import React from "react";
import { Card } from "react-bootstrap";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import "./homepage.css";

const homepage = () => {
  return (
    <div >
      <div className="main-content-wraper">
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
        <div className="main-card-home">
          <div className=" ">
            <Card className="main-card">
              <Card.Body>My Coice of partner will be welcomed by the family</Card.Body>
            </Card>
            </div>
            <div className="main-icon"><MoreHorizIcon /></div>
          
        
        </div>
        <div className="main-card-home">
          <div className=" ">
            <Card className="main-card">
              <Card.Body>My Coice of partner will be welcomed by the family</Card.Body>
            </Card>
            </div>
            <div className="main-icon"><MoreHorizIcon /></div>
          
        
        </div>
        <div className="main-card-home">
          <div className=" ">
            <Card className="main-card">
              <Card.Body>My Coice of partner will be welcomed by the family</Card.Body>
            </Card>
            </div>
            <div className="main-icon"><MoreHorizIcon /></div>
          
        
        </div>
        <div className="main-card-home">
          <div className=" ">
            <Card className="main-card">
              <Card.Body>My Coice of partner will be welcomed by the family</Card.Body>
            </Card>
            </div>
            <div className="main-icon"><MoreHorizIcon /></div>
          
        
        </div>
      </div>
    </div>
  );
};

export default homepage;
