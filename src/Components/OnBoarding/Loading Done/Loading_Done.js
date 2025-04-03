import React from "react";
import { Button, Container } from "react-bootstrap";
import Group1 from "../Loading Done/Images/Group1.png";
import Echat from "../Loading Done/Images/E-Chat.png";
import Vector from "../Loading Done/Images/Vector.png"
import { useNavigate } from "react-router-dom";

const Loading_Done = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/introduce_step_1")
    }
    return (
        <div>
            <Container
                fluid
                className="p-0 text-dark "
                style={{ maxWidth: "425px" }}
            >
                <div
                    className="mt-5 d-flex align-items-center"
                    style={{ marginLeft: "4rem" }}
                >
                    <img src={Group1} style={{ marginRight: "1rem" }} />
                    <img src={Echat} />
                </div>
                <div className="d-flex justify-content-center align-items-center position-relative">
                    <div className="chat-bubble d-flex flex-column justify-content-center align-items-center text-primary fw-bold text-center">
                        <div className="" style={{ marginTop: "6rem" }}>
                            <img src={Vector} />
                        </div>
                        <div className="fw-bolder" style={{ marginTop: "-10rem" }}>
                            <p className="mb-1 ">Stay Connected</p>
                            <p className="mb-0 ">Stay Chatting</p>
                        </div>
                    </div>
                </div>
                <div>
                    <Button onClick={handleClick} className="" style={{marginTop: "18rem"}}>
                        Next
                    </Button>
                </div>
            </Container>
        </div>
    );
};

export default Loading_Done;
