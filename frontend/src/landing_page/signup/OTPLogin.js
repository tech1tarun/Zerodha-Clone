import React, { useState } from "react";

const OTPLogin = () => {
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSendOtp = async () => {
    if (mobile.trim().length !== 10) {
      setError("Please enter a valid 10-digit mobile number.");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("http://localhost:3002/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Failed to send OTP");

      setOtpSent(true);
      setSuccess("OTP sent successfully.");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (otp.trim().length !== 6) {
      setError("Please enter a valid 6-digit OTP.");
      setSuccess("");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccess("");

      const res = await fetch("http://localhost:3002/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile, otp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Invalid OTP");

      localStorage.setItem("token", data.token);
      setSuccess("OTP verified successfully.");
    } catch (err) {
      setError(err.message);
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "400px" }}>
      <div className="input-group" style={{ height: "50px" }}>
        <span className="input-group-text">+91</span>
        <input
          type="text"
          className="form-control"
          placeholder="Enter your mobile number"
          maxLength="10"
          value={mobile}
          onChange={(e) => {
            const onlyDigits = e.target.value.replace(/\D/g, "");
            setMobile(onlyDigits);
          }}
        />
      </div>

      <button
        type="button"
        className="btn btn-primary mt-3 px-4"
        onClick={handleSendOtp}
        disabled={loading}
      >
        {loading && !otpSent ? "Sending..." : "Send OTP"}
      </button>

      {otpSent && (
        <>
          <input
            type="text"
            className="form-control mt-3"
            placeholder="Enter 6-digit OTP"
            maxLength="6"
            value={otp}
            onChange={(e) => {
              const onlyDigits = e.target.value.replace(/\D/g, "");
              setOtp(onlyDigits);
            }}
          />

          <button
            type="button"
            className="btn btn-success mt-3 px-4"
            onClick={handleVerifyOtp}
            disabled={loading}
          >
            {loading ? "Verifying..." : "Verify OTP"}
          </button>
        </>
      )}

      {error && <p className="text-danger mt-3 mb-0">{error}</p>}
      {success && <p className="text-success mt-3 mb-0">{success}</p>}
    </div>
  );
};

export default OTPLogin;
