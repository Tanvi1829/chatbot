import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import OtpInput from 'react-otp-input';
import { ArrowRight } from 'iconsax-react';

const Get_OTP = () => {
  const [otp, setOtp] = useState(""); // State to store OTP input

  return (
    <Container fluid className="p-0 text-dark" style={{ maxWidth: "425px" }}>
      <div className="d-flex justify-content-between">
        <h1 className="text-start ms-4 mt-5">Login</h1>
        <Button className="rounded-pill w-30 me-4 mt-5 bg-primary-subtle border border-0 text-primary">
          Register
        </Button>
      </div>

      <div className="fs-1 mt-3 ms-4 text-start" style={{ marginRight: "11.5rem" }}>
        <span>Enter OTP Code</span>
        <div className="fs-5 mt-3">
          <span>Sent to: </span> {/* Replace with actual phone number */}
        </div>

        {/* OTP Input Field - Fixed */}
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={4} // Number of OTP input fields
          otpType="number"
          disabled={false}
          autoFocus
          // isInputNum={true} // Restrict to numbers only
          // shouldAutoFocus={true} // Auto-focus first input
          // renderSeparator={<span> </span>} // Adds spacing
          renderInput={(props) => <input {...props} />} // Fix for renderInput error
          inputStyle={{
            width: "2.5rem",
            height: "3rem",
            margin: "0.3rem",
            marginTop: "18rem",
            fontSize: "1.5rem",
            borderRadius: "5px",
            border: "1px solid #ccc",
            textAlign: "center",
            marginLeft: "2.4rem"
          }}
          containerStyle="d-flex justify-content-start"
        />
      </div>
         <div className="d-flex justify-content-between">

              <div
                className="rounded-pill bg-primary-subtle border border-0  mt-5"
                style={{ width: "3rem", height: "3rem", marginLeft: "22rem" }}
              >
                <ArrowRight size="32" color="#fff" className="mt-2"   />
              </div>
            </div>
    </Container>
  );
};

export default Get_OTP;
