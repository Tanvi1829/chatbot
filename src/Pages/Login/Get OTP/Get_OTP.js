import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import OtpInput from "react-otp-input";
import { ArrowRight } from "iconsax-react";
import { useLocation, useNavigate } from "react-router-dom";
import { Client, Account } from "appwrite";

const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67ecb5da000a4232b43e");

const account = new Account(client);

const Get_OTP = () => {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { phone, userId } = state || {}; // Get phone and userId from state

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!userId) {
      setError("User ID is not set. Please request a new OTP.");
      setLoading(false);
      return;
    }

    try {
      console.log("Verifying with userId:", userId, "and OTP:", otp);
      const session = await account.updatePhoneSession(userId, otp);
      console.log("Session created:", session);
      alert("Login successful!");
      navigate("/userinfo"); // Redirect after successful login
    } catch (err) {
      console.error("Verification error:", err);
      setError(err.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container fluid className="p-0 text-dark" style={{ height: "100vh" }}>
      {/* Header Section */}
      <div
        className="card p-4 text-white"
        style={{
          background: "linear-gradient(135deg, #00A3FF, #007BFF)",
          // borderRadius: "15px",
          // borderBottomRightRadius: "100px",
          height: "200px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
           <h1 className="text-start ms-4 mt-5">Login</h1>
                 <Button
                   className="rounded-pill w-30 me-4 mt-5 bg-primary-subtle border border-0 text-primary"
                   onClick={() => navigate("/register")}
                 >
                   Register
                 </Button>
        </div>
        <div className="text-white text-start ms-4">
          <h2 className="mb-0" style={{ fontSize: "24px", fontWeight: "bold" }}>
            Enter OTP Code
          </h2>
          <p className="mt-2" style={{ fontSize: "16px", fontWeight: "400" }}>
            Sent to: {phone || "N/A"}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div
        className="card mt-4 p-4"
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          marginTop: "-50px",
          backgroundColor: "#fff",
          position: "relative",
          minHeight: "calc(100vh - 200px)",
        }}
      >
        {/* OTP Input Field */}
        <div className="text-center mt-5">
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4} // Number of OTP input fields
            otpType="number"
            disabled={loading}
            autoFocus
            renderInput={(props) => <input {...props} />}
            inputStyle={{
              width: "3rem",
              height: "3rem",
              margin: "0.5rem",
              fontSize: "1.5rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
              textAlign: "center",
            }}
            containerStyle="d-flex justify-content-center"
          />
        </div>
        <div className="d-flex justify-content-end mt-5">
  <div
    className="rounded-pill border-0"
    style={{
      width: "3rem",
      height: "3rem",
      backgroundColor: otp.length === 4 ? "#2FBDFD" : "#9FDEFA",
      transition: "background-color 0.3s ease", // Smooth transition for color change
    }}
    onClick={handleVerifyOtp}
  >
    <ArrowRight size="32" color="#fff" className="mt-2" />
  </div>
</div>
        {error && <div className="alert alert-danger mt-3 text-center">{error}</div>}
      </div>
    </Container>
  );
};

export default Get_OTP;