import React from "react";
import OTPLogin from "./OTPLogin";

const Hero = () => {
  return (
    <div className="container p-5">
      <div className="row text-center mt-5 ">
        <h1 className="text-muted mb-3 fs-3">
          Open a free demat and trading account online
        </h1>
        <p className="text-muted fs-5">
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-6">
          <img src="media\images\account_open.svg" alt="Description" />
        </div>
        <div className="col-6">
          <h2 className="text-muted fs-3">Signup Now</h2>
          <p className="text-muted fw-medium">
            Or track your existing application
          </p>

          <OTPLogin />
        </div>
      </div>
    </div>
  );
};

export default Hero;
