import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import imageIntroduce4 from "../Introduce Step 4/Image/Image Introduce.png"

const Introduce_Step_4 = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Container fluid className="p-0 text-dark " style={{ maxWidth: "425px" }}>
          <div className="mt-5 pt-5">
            <img src={imageIntroduce4} />
          </div>
          <div className="mt-5 pt-5 text-primary">
            <h2 className="fw-bolder">Cross-Platform <br/> Compatibility</h2>
            <p className="fw-normal">
            Access chats on any device seamlessly.
            </p>
          </div>
          <div  className="container text-center py-1">
            <Button className="w-100 rounded-pill" style={{marginTop: "12rem", height: "3rem"}}>Get Started</Button>
          </div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-pill" style={{marginTop: "1rem"}}>
            {/* Skip Button */}
            <button className="btn btn-link text-primary text-decoration-none">
              Skip
            </button>
  
            {/* Pagination Dots */}
            <div className="d-flex gap-2">
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
              <span
                className="rounded-circle bg-primary "
                style={{ width: "10px", height: "10px" }}
              ></span>
            </div>
  
            {/* Next Button */}
            <button
              className="bg-primary-subtle border border-0 rounded-pill px-4" style={{height: "4rem"}}
              onClick={() => navigate("/login_empty")}
            >
              Next
            </button>
          </div>
        </Container>
      </div>
    );
}

export default Introduce_Step_4