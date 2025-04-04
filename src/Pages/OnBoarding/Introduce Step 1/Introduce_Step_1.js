import React from "react";
import { Button, Container } from "react-bootstrap";
import ImageIntroduce from "../Introduce Step 1/Images/Image Introduce.png";
import { useNavigate } from "react-router-dom";
import GetStartedButton from "../../../Components/OnBoarding/GetStartedButton/GetStartedButton";
import ActionsButton from "../../../Components/OnBoarding/ActionsButton/ActionsButton";

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
        <GetStartedButton/>
        <ActionsButton/>

      </Container>
    </div>
  );
};

export default Introduce_Step_1;
