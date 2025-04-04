import React from 'react'
import { useNavigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import ImageIntroduce2 from "../Introduce Step 2/Image/Image Introduce.png"
import GetStartedButton from "../../../Components/OnBoarding/GetStartedButton/GetStartedButton";
import ActionsButton from "../../../Components/OnBoarding/ActionsButton/ActionsButton";

const Introduce_Step_2 = () => {
    const navigate = useNavigate();
    return (
      <div>
        <Container fluid className="p-0 text-dark " style={{ maxWidth: "425px" }}>
          <div className="mt-5 pt-5">
            <img src={ImageIntroduce2} />
          </div>
          <div className="mt-5 pt-5 text-primary">
            <h2 className="fw-bolder">Video and Voice Calls</h2>
            <p className="fw-normal">
            Instantly connect via video and voice calls.
            </p>
          </div>
          <GetStartedButton/>
          <ActionsButton/>
        </Container>
      </div>
    );
}

export default Introduce_Step_2