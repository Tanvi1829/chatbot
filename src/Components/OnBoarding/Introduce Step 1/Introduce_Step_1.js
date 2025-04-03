import React from "react";
import { Button, Container } from "react-bootstrap";
import ImageIntroduce from "../Introduce Step 1/Images/Image Introduce.png";
import { useNavigate } from "react-router-dom";

const Introduce_Step_1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Container fluid className="p-0 text-dark " style={{ maxWidth: "425px" }}>
        <div className="mt-5 pt-5">
          <img src={ImageIntroduce} />
        </div>
        <div className="mt-5 pt-5 text-primary">
          <h2 className="fw-bolder">Group Chatting</h2>
          <p className="fw-normal">
            Connect with multiple memebers in
            <br /> group chats
          </p>
        </div>
        <div  className="container text-center py-1">
           <Button className="w-100 rounded-pill" style={{marginTop: "12rem", height: "3rem"}}>Get Started</Button>
        </div>
        <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-pill" style={{marginTop: "1rem"}}>
          {/* Skip Button */}
          <button className="btn btn-link text-primary text-decoration-none" onClick={() => navigate("/introduce_step_2")}>
            Skip
          </button>

          {/* Pagination Dots */}
          <div className="d-flex gap-2">
            <span
              className="rounded-circle bg-primary"
              style={{ width: "10px", height: "10px" }}
            ></span>
            <span
              className="rounded-circle bg-primary opacity-50"
              style={{ width: "10px", height: "10px" }}
            ></span>
            <span
              className="rounded-circle bg-primary opacity-50"
              style={{ width: "10px", height: "10px" }}
            ></span>
            <span
              className="rounded-circle bg-primary opacity-50"
              style={{ width: "10px", height: "10px" }}
            ></span>
          </div>

          {/* Next Button */}
          <button
            className="bg-primary-subtle border border-0 rounded-pill px-4" style={{height: "4rem"}}
            onClick={() => navigate("/introduce_step_2")}
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Introduce_Step_1;
