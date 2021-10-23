import React, { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Collapse } from "react-bootstrap";
import { FloatingLabel } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./homepage";
import Homeblurr from "./homeBlurr";
import "./Home.css";
const Home = () => {
  const [open, setopen] = useState(false);
  return (
    <div className="">
      <div className="main">
        <div className="container">
          <h2>
            Raise a poll anonymously{" "}
            <ExpandMoreIcon
              onClick={() => setopen(!open)}
              aria-control="collapse"
            />
          </h2>
          <p>
            It can be anything ranging from seemingly uncomfortable questions,
            to even just topics to understand the personality and values better
            of the other person.
          </p>
          <Collapse in={open}>
            <div id="collapse">
              <>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Type Your Question here"
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
                <FloatingLabel controlId="floatingTextarea2" label="Comments">
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                  />
                </FloatingLabel>
              </>
              <>
                <FloatingLabel controlId="floatingSelect">
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">Option 1 </option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    <option value="3">Add Options</option>
                  </Form.Select>
                </FloatingLabel>
              </>

              <p>Select Upto three tags</p>
              <div>
                <Button>Apperance</Button> <Button>Family</Button>{" "}
                <Button>Friends</Button> <Button>Finance</Button>{" "}
                <Button>Welfare</Button> <Button>Wellness</Button>{" "}
                <Button>Other</Button>
              </div>

              <div className="submit-button-home">
                <Button variant="primary" size="lg" active>
                  Submit
                </Button>{" "}
              </div>

              {/* <ExpandLessIcon /> */}
            </div>
          </Collapse>
        </div>
      </div>
      <div className="home-last">
        <Homepage />
      </div>
      <div className="home-last">
        <Homepage />
      </div>
      <div className="home-last">
        <Homepage />
      </div>
      <div className="home-last">
        <Homepage />
      </div>
      <div className="home-last">
        <Homepage />
      </div>
   
      <div className="home-last">
        <Homeblurr />
      </div> 
    </div>
  );
};

export default Home;
