import React from "react";

function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col-lg-6">
          <h2 className=" mb-4 fs-2">Free and open market education</h2>

          <p className="text-muted fs-5 mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="#"
            className="text-primary text-decoration-none fs-5 d-inline-block mb-5"
          >
            Varsity →
          </a>

          <p className="text-muted fs-5 mb-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a href="#" className="text-primary text-decoration-none fs-5">
            TradingQ&A →
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
