import React from "react";

const AccountType = () => {
  return (
    <div className="container mt-5">
      <div className="row text-center ">
        <h2 className="fs-3 mb-5">Steps to open a demat account with Zerodha</h2>
      </div>
      <div className="row text-center mt-5">
        <div className="col-6">
          <img src="media\images\steps-acop.svg" alt="steps" style={{height:"200px"}} />
        </div>
        <div className="col-6">
  <div className="p-4">

    {/* Step 1 */}
    <div className="d-flex align-items-center mb-3">
      <div className="rounded-circle border text-center me-3" 
           style={{ width: "35px", height: "35px", lineHeight: "35px" }}>
        01
      </div>
      <h6 className="mb-0">Enter the requested details</h6>
    </div>
    <hr />

    {/* Step 2 */}
    <div className="d-flex align-items-center mb-3">
      <div className="rounded-circle border text-center me-3" 
           style={{ width: "35px", height: "35px", lineHeight: "35px" }}>
        02
      </div>
      <h6 className="mb-0">Complete e-sign & verification</h6>
    </div>
    <hr />

    {/* Step 3 */}
    <div className="d-flex align-items-center">
      <div className="rounded-circle border text-center me-3" 
           style={{ width: "35px", height: "35px", lineHeight: "35px" }}>
        03
      </div>
      <h6 className="mb-0">Start investing!</h6>
    </div>

  </div>
</div>
      </div>
    </div>
  );
};

export default AccountType;
