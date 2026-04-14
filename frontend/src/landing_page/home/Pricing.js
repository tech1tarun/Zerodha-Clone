import React from "react";

function Pricing() {
  return (
    <div className="container p-2">
      <div className="row">
        <div className="col-4">
          <h3 className="mb-3">Unbeatable Pricing</h3>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a href="#" className="text-primary text-decoration-none">
            See Pricing →
          </a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col p-3 border">
              <h1 className="mb-4">₹0</h1>
              <p>Free equity delivery <br /> direct mutual funds</p>
            </div>
            <div className="col p-3 border">
              <h1 className="mb-4">₹20</h1>
              <p>Intrady and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
