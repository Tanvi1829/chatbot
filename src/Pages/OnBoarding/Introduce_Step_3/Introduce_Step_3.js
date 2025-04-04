import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import imageIntroduce3 from "../Introduce_Step_3/Image/Image Introduce.png"
import GetStartedButton from "../../../Components/OnBoarding/GetStartedButton/GetStartedButton";
import ActionsButton from "../../../Components/OnBoarding/ActionsButton/ActionsButton";

const Introduce_Step_3 = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Container fluid className="p-0 text-dark " style={{ maxWidth: "425px" }}>
          <div className="mt-5 pt-5">
            <img src={imageIntroduce3} />
          </div>
          <div className="mt-5 pt-5 text-primary">
            <h2 className="fw-bolder">Message Encryption</h2>
            <p className="fw-normal">
            Ensure privacy with encrypted messages.
            </p>
          </div>
          <GetStartedButton/>
          <ActionsButton/>
        </Container>
      </div>
    );
}

export default Introduce_Step_3