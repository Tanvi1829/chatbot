import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth";
import {login, logout} from "../../../store/authSlice";
import { Phone } from 'iconsax-react'; // Importing the phone icon from Iconsax

const Login_Empty = () => {

  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [dispatch])

  // return (
  //   <div>Login_Empty</div>
  // );

  return !loading ? (
    <div className="d-flex justify-content-center align-items-start vh-100 bg-light p-2">
      <div
        className="card p-4"
        style={{
          backgroundColor: '#00A3FF', // Blue background matching the image
          // borderRadius: '20px', // Rounded corners
          width: '100%',
          maxWidth: '400px', // Card width
          border: 'none', // Remove default card border
          borderBottomRightRadius: "10rem",
          height: "13rem"
        }}
      >
        {/* Header with Login and Register */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h2
            className="text-white mb-0"
            style={{
              fontSize: '24px', // Match font size
              fontWeight: 'bold', // Match font weight
            }}
          >
            Login
          </h2>
          <button
            className="btn rounded-pill px-3 py-1"
            style={{
              backgroundColor: '#E6F0FA', // Light blue background for the button
              color: '#00A3FF', // Blue text color
              fontSize: '16px', // Match font size
              fontWeight: '500', // Match font weight
              border: 'none', // Remove default border
              height: "3rem",
              width: "8rem"
            }}
          >
            Register
          </button>
        </div>

        {/* Enter your mobile phone text */}
        <div className="text-white text-start">
          <p
            className="mb-0"
            style={{
              fontSize: '22px', // Match font size
              fontWeight: '400', // Match font weight
            }}
          >
            Enter your mobile phone
          </p>
        </div>
      </div>
    </div>
  ) : null
};

export default Login_Empty;































// import React, { useState, useEffect } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import PhoneInput from 'react-phone-input-2';
// import 'react-phone-input-2/lib/style.css'; // Import the library's CSS

// const Login_Empty = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [generatedOtp, setGeneratedOtp] = useState(null);
//   const [isOtpSent, setIsOtpSent] = useState(false);
//   const [timer, setTimer] = useState(0);
//   const [rememberMe, setRememberMe] = useState(false);

//   Simulate sending OTP (generate OTP on the frontend)
//   const handleSendOtp = () => {
//     if (!phoneNumber || phoneNumber.length < 11) {
//       alert('Please enter a valid phone number');
//       return;
//     }

//     // Generate a random 4-digit OTP
//     const newOtp = Math.floor(1000 + Math.random() * 9000);
//     setGeneratedOtp(newOtp);
//     console.log(`Generated OTP: ${newOtp}`); // For testing purposes

//     // Simulate OTP being sent
//     setIsOtpSent(true);
//     setTimer(60); // Start 60-second timer
//   };

//   // Start the timer countdown when OTP is "sent"
//   useEffect(() => {
//     if (timer > 0) {
//       const interval = setInterval(() => {
//         setTimer((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(interval); // Cleanup interval on component unmount
//     }
//   }, [timer]);

//   // Handle OTP verification
//   const handleVerifyOtp = () => {
//     if (otp.length !== 4) {
//       alert('Please enter a valid 4-digit OTP');
//       return;
//     }

//     if (parseInt(otp) === generatedOtp) {
//       alert('OTP Verified Successfully!');
//       // Proceed with next steps (e.g., redirect)
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   // Handle resending OTP
//   const handleResendOtp = () => {
//     const newOtp = Math.floor(1000 + Math.random() * 9000);
//     setGeneratedOtp(newOtp);
//     console.log(`Resent OTP: ${newOtp}`); // For testing purposes
//     setTimer(60); // Restart the timer
//     setOtp(''); // Clear the OTP input
//   };

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col xs={12} sm={6} md={4}>
//           <div className="p-3 border rounded shadow-sm">
//             <div className="d-flex justify-content-between align-items-center mb-3">
//               <h4 className="text-primary">Login</h4>
//               <Button variant="outline-primary">Register</Button>
//             </div>

//             {!isOtpSent ? (
//               <>
//                 <h5>Enter your mobile phone</h5>
//                 <p className="text-muted">You will get a code via SMS.</p>
//                 <Form>
//                   <PhoneInput
//                     country={'gb'} // Default to UK
//                     value={phoneNumber}
//                     onChange={setPhoneNumber}
//                     placeholder="Enter phone number"
//                     inputProps={{
//                       name: 'phone',
//                       required: true,
//                     }}
//                     containerClass="mb-3"
//                     inputClass="form-control" // Bootstrap styling
//                   />
//                   <Form.Check
//                     type="checkbox"
//                     label="Remember me"
//                     checked={rememberMe}
//                     onChange={(e) => setRememberMe(e.target.checked)}
//                     className="mb-3"
//                   />
//                   <Button
//                     variant="outline-primary"
//                     className="w-100"
//                     onClick={handleSendOtp}
//                   >
//                     Next <span>→</span>
//                   </Button>
//                 </Form>
//               </>
//             ) : (
//               <>
//                 <h5>Enter OTP Code</h5>
//                 <p className="text-muted">Sent to: {phoneNumber}</p>
//                 <Form>
//                   <Form.Control
//                     type="text"
//                     placeholder="----"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
//                     maxLength="4"
//                     className="mb-3 text-center"
//                   />
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <span>
//                       <span className="text-muted">
//                         00:{timer < 10 ? `0${timer}` : timer}
//                       </span>
//                     </span>
//                     <Button
//                       variant="link"
//                       onClick={handleResendOtp}
//                       disabled={timer > 0}
//                     >
//                       Resend Code
//                     </Button>
//                   </div>
//                   <Button
//                     variant="outline-primary"
//                     className="w-100"
//                     onClick={handleVerifyOtp}
//                   >
//                     Verify <span>→</span>
//                   </Button>
//                 </Form>
//               </>
//             )}
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login_Empty;
