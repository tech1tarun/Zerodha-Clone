import React from "react";

function Brokerage() {
  return (
    <div className="container p-5 mb-5">
      <div className="row text-center">
        <div className="col-4">
          <img src="media\images\pricing0.svg" className=" h-75 w-75 " />
          <p className="fs-2 fw-medium text-muted">Free equity delivery</p>
          <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
        </div>
        <div className="col-4">
          <img src="media\images\20.svg" className=" h-75 w-75 " />
          <p className="fs-2 fw-medium text-muted">Intraday and F&O trades</p>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        <div className="col-4">
          <img src="media\images\pricing0.svg" className=" h-75 w-75 " />
          <p className="fs-2 fw-medium text-muted">Free direct MF</p>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
