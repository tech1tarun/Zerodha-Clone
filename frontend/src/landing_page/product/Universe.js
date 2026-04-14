import React from "react";

const Universe = () => {
  return (
    <div className="container">
      <div className="row mt-5 mb-5">
        <h3 className="fs-4 text-center p-5">
          Want to know more about our technology stack? Check out the
          Zerodha.tech blog.
        </h3>
      </div>
      <div className="row text-center ">
        <h3 className="mb-4">The Zerodha Universe</h3>
        <p style={{ fontSize: "1em" }} className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row text-center mt-3">
        <div className="col">
          <a
            href="https://www.zerodhafundhouse.com/"
            className="text-decoration-none"
            target="_blank"
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              style={{ height: "55px" }}
              className="mb-2"
            />
            <p className="text-muted mb-5 ">
              Our asset management venture <br /> that is creating simple and
              transparent index <br /> funds to help you save for your goals.
            </p>
            <br />
          </a>
          <a
            href="https://www.streak.tech/"
            className="text-decoration-none"
            target="_blank"
          >
            <img
              src="media/images/streakLogo.png"
              style={{ height: "55px" }}
              className="mb-2"
            />
            <p className="text-muted mb-5">
              Systematic trading platform <br /> that allows you to create and
              backtest <br />
              strategies without coding
            </p>
          </a>
        </div>
        <div className="col">
          <a href="https://sensibull.com/" className="text-decoration-none">
            <img
              src="media/images/sensibullLogo.svg"
              style={{ height: "55px" }}
              className="mb-2"
              target="_blank"
            />
            <p className="text-muted mb-5 ">
              Options trading platform that lets you <br /> create strategies,
              analyze positions, and examine <br /> data points like open
              interest, FII/DII, and more.
            </p>
            <br />
          </a>
          <a
            href="https://www.streak.tech/"
            className="text-decoration-none"
            target="_blank"
          >
            <img
              src="media/images/smallcaseLogo.png"
              style={{ height: "55px" }}
              className="mb-2"
            />
            <p className="text-muted mb-5">
              Thematic investing platform <br /> that helps you invest in
              diversified <br />
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>
        <div className="col">
          <a
            href="https://www.tijorifinance.com/dashboard/"
            className="text-decoration-none"
            target="_blank"
          >
            <img
              src="media/images/tijori.svg"
              style={{ height: "55px" }}
              className="mb-2"
            />
            <p className="text-muted mb-5 ">
              Investment research platform <br /> that offers detailed insights
              on stocks,
              <br /> sectors, supply chains, and more.
            </p>
            <br />
          </a>
          <a
            href="https://joinditto.in/"
            className="text-decoration-none"
            target="_blank"
          >
            <img
              src="media/images/dittoLogo.png"
              style={{ height: "55px" }}
              className="mb-2"
            />
            <p className="text-muted mb-5">
              Personalized advice on life <br />
              and health insurance. No spam
              <br />
              and no mis-selling.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Universe;
