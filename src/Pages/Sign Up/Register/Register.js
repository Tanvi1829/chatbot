import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../../appwrite/auth"; // ✅ updated path
import { login, logout } from "../../../store/authSlice"; // ✅ updated path
import { Client, Account, ID } from "appwrite";
import { ArrowLeft } from "iconsax-react";
import { useNavigate } from "react-router-dom";

// Initialize Appwrite client
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("67ecb5da000a4232b43e");

const account = new Account(client);

const Register = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [userId, setUserId] = useState("");
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const formattedPhone = phone.startsWith("+") ? phone : `+${phone}`;
      const generatedUserId = ID.unique();

      const response = await account.createPhoneToken(
        generatedUserId,
        formattedPhone
      );
      setUserId(generatedUserId);
      setIsOtpSent(true);
      alert("OTP has been sent to your phone!");
    } catch (err) {
      setError(err.message || "Failed to send OTP.");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const session = await account.updatePhoneSession(userId, otp);
      alert("Login successful!");
      console.log("Session:", session);

      const userData = await account.get();
      dispatch(login({ userData }));
    } catch (err) {
      setError(err.message || "OTP verification failed.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, [dispatch]);

  return !loading ? (
    <div className="justify-content-center align-items-start vh-100 bg-light p-2">
      <div
        className="card p-4"
        style={{
          backgroundColor: "#00A3FF",
          width: "100%",
          border: "none",
          borderBottomRightRadius: "10rem",
          height: "13rem",
        }}
      >
        <div className="d-flex justify-content-between align-items-center mb-3">
          <button
            className="btn rounded-pill px-3 py-1 d-flex align-items-center gap-2"
            style={{
              backgroundColor: "#E6F0FA",
              color: "#00A3FF",
              fontSize: "16px",
              fontWeight: "500",
              border: "none",
              height: "3rem",
              width: "8rem",
            }}
            onClick={() => navigate("/login_empty")}
          >
            <ArrowLeft size="20" color="#00A3FF" /> 
            Login
          </button>
          <h2
            className="text-white mb-0"
            style={{ fontSize: "24px", fontWeight: "bold" }}
          >
            Register
          </h2>
        </div>
        <div className="text-white text-end">
          <p className="mb-0" style={{ fontSize: "22px", fontWeight: "400" }}>
            Enter your mobile phone
          </p>
        </div>
      </div>

      <div className="">
        <div className="card mt-4">
          <div className="card-header">
            <h3 className="text-center">Phone Login</h3>
          </div>
          <div className="card-body">
            {!isOtpSent ? (
              <form onSubmit={handleSendOtp}>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone Number (with country code, e.g., +91234567890)
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+91234567890"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send OTP"}
                </button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOtp}>
                <div className="mb-3">
                  <label htmlFor="otp" className="form-label">
                    Enter OTP
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="otp"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter 6-digit OTP"
                    required
                  />
                </div>
                {error && <div className="alert alert-danger">{error}</div>}
                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  disabled={loading}
                  onClick={() => navigate("/userinfo")}
                >
                  {loading ? "Verifying..." : "Verify OTP"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default Register;
