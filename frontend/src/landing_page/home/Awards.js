import React from "react";

function Awards() {
  return (
    <div className="container mt-5 mb-5   ">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt="Broker_Image"></img>
        </div>
        <div className="col-6 p-5 mt-5">
          <h1>Largest Stock Broker in India</h1>
          <p className="mb-5">
            2+ million Zerodha Clients contribute to over 15% of all retails
            order volumes in India daily by trading and investing in ;
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Futures and Options</p>
                </li>
                <li>
                  <p>Stocks and IPOs</p>
                </li>
                <li>
                  <p>Commodity derivatives</p>
                </li>
              </ul>
            </div>

            <div className="col-6">
              <ul>
                <li>
                  <p>Direct mutual funds</p>
                </li>
                <li>
                  <p>Currency derivatives</p>
                </li>
                <li>
                  <p>Bonds and Government Security</p>
                </li>
              </ul>
            </div>
          </div>
          <img
            src="media/images/pressLogos.png"
            alt="Press Logos"
            style={{ width: "90%" }}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Awards;
