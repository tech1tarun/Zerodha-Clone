import React from "react";

const Chargetable = () => {
  return (
    <div className="container">
      <h3 className="mb-4">Charges for account opening</h3>

      <div class="table-responsive table-bordered mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-muted">
                Type of Account
              </th>
              <th scope="col" className="text-muted">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td scope="row">Online account</td>
              <td>Free</td>
            </tr>
            <tr class="">
              <td>Offline account</td>
              <td>Free</td>
            </tr>
            <tr class="">
              <td>NRI account (offline only)</td>
              <td>₹ 500</td>
            </tr>
            <tr class="">
              <td>
                Partnership, LLP, HUF, or Corporate accounts (offline only)
              </td>
              <td>₹ 500</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="mb-4">Demat AMC (Annual Maintenance Charge)</h3>

      <div class="table-responsive table-bordered mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-muted">
                Value of holdings
              </th>
              <th scope="col" className="text-muted">
                AMC
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td scope="row">Up to ₹4 lakh</td>
              <td>Free</td>
            </tr>
            <tr class="">
              <td>₹4 lakh - ₹10 lakh</td>
              <td>₹ 100 per year, charged quarterly*</td>
            </tr>
            <tr class="">
              <td>Above ₹10 lakh</td>
              <td> ₹ 300 per year, charged quarterly</td>
            </tr>
          </tbody>
        </table>
        <p style={{ fontSize: "15px" }} className="mb-5">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA, click here.
        </p>
      </div>

      <h3 className="mb-4">Charges for optional value added services</h3>

      <div class="table-responsive table-bordered mb-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col" className="text-muted">
                Service
              </th>
              <th scope="col" className="text-muted">
                Billing Frquency
              </th>
              <th scope="col" className="text-muted">
                Charges
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="">
              <td scope="row">Tickertape</td>
              <td>Monthly / Annual</td>
              <td>Free: 0 | Pro: 249/2399</td>
            </tr>
            <tr class="">
              <td>Smallcase</td>
              <td>Per transaction</td>
              <td>Buy & Invest More: 100 | SIP: 10</td>
            </tr>
            <tr class="">
              <td>Kite Connect</td>
              <td>Monthly</td>
              <td>Connect: 500 | Personal: Free</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Chargetable;
