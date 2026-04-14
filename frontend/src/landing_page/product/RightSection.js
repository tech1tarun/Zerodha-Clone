import React from "react";

const RightSection = ({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) => {
  return (
    <div className="container mt-5 mb-5">
      <div className="row align-items-center">
        <div className="col-6 ">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} className="text-decoration-none">
              {learnMore} &nbsp;
              <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL} alt={productName} />
        </div>
      </div>
    </div>
  );
};

export default RightSection;
