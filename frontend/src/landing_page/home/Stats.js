import React from "react";

function Stats() {
  return (
    <div className="container py-5 my-5">
      <div className="row align-items-center">
        {/* Left Side */}
        <div className="col-lg-6">
          <h2 className="fs-2 fw-bold mb-4">Trust with confidence</h2>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold">Customer-first always</h3>
            <p className="text-muted fs-5">
              That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh
              crores of equity investments, making us India’s largest broker;
              contributing to 15% of daily retail exchange volumes in India.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold">No spam or gimmicks</h3>
            <p className="text-muted fs-5">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h3 className="fs-4 fw-semibold">The Zerodha universe</h3>
            <p className="text-muted fs-5">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <h3 className="fs-4 fw-semibold">Do better with money</h3>
            <p className="text-muted fs-5">
              With initiatives like Nudge and Kill Switch, we don't just
              facilitate transactions, but actively help you do better with your
              money.
            </p>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-lg-6 text-center">
          <img
            src="media/images/ecosystem.png"
            alt="Ecosystem_Image"
            className="img-fluid w-100"
            style={{ maxHeight: "550px" }}
          />

          <div className="d-flex justify-content-center gap-4 mt-4">
            <a href="#" className="text-primary text-decoration-none fs-5">
              Explore our products →
            </a>

            <a href="#" className="text-primary text-decoration-none fs-5">
              Try Kite demo →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
