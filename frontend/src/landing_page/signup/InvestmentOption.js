import React from "react";

const InvestmentOption = () => {
  return (
    <div className="container mb-5">
      <div className="row text-center">
        <h2 className="fs-3 m-5">
          Investment options with Zerodha demat account{" "}
        </h2>
      </div>
      <div className="row gy-4">
        {/* Item 1 */}
        <div className="col-md-6">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/stocks-acop.svg" alt="stocks"  />
            <div>
              <h5 className="mb-1">Stocks</h5>
              <p className="mb-0 text-muted">
                Invest in all exchange-listed securities
              </p>
            </div>
          </div>
        </div>

        {/* Item 2 */}
        <div className="col-md-6">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/mf-acop.svg" alt="mf" />
            <div>
              <h5 className="mb-1">Mutual funds</h5>
              <p className="mb-0 text-muted">
                Invest in commission-free direct mutual funds
              </p>
            </div>
          </div>
        </div>

        {/* Item 3 */}
        <div className="col-md-6">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/ipo-acop.svg" alt="ipo"  />
            <div>
              <h5 className="mb-1">IPO</h5>
              <p className="mb-0 text-muted">
                Apply to the latest IPOs instantly via UPI
              </p>
            </div>
          </div>
        </div>

        {/* Item 4 */}
        <div className="col-md-6">
          <div className="d-flex align-items-start gap-3">
            <img src="media/images/fo-acop.svg" alt="fno"  />
            <div>
              <h5 className="mb-1">Futures & options</h5>
              <p className="mb-0 text-muted">
                Hedge and mitigate market risk through simplified F&O trading
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="row d-flex justify-content-center mt-4 ">
        <button className="btn btn-primary px-5 py-3 fw-semibold rounded w-25 mt-5 mb-5">Explore Investment</button>
      </div>
    </div>
  );
};

export default InvestmentOption;
