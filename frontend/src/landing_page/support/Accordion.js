import { useState } from "react";

function Accordion() {
  const items = [
    {
      icon: <i class="fa-duotone fa-solid fa-circle-plus"></i>,
      title: "Account Opening",
      content: [
        "How to open account",
        "Required documents",
        "Verification process",
        "Account activation",
        "Extra info for scroll testing",
        "More content",
        "Even more content",
      ],
    },
    {
      icon: <i class="fa-solid fa-circle-user"></i>,
      title: "KYC Process",
      content: ["PAN card", "Aadhaar", "Address proof"],
    },
    {
      icon: <i class="fa-solid fa-angle-right"></i>,
      title: "Charges",
      content: ["Brokerage", "Taxes", "Hidden charges"],
    },
    {
      icon: <i class="fa-solid fa-indian-rupee-sign"></i>,
      title: "Support",
      content: ["Email", "Call", "Chat support"],
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-8">
          {items.map((item, index) => (
            <div key={index} className="border rounded mb-2">
              {/* Header */}
              <div
                className="d-flex justify-content-between align-items-center p-3"
                style={{ cursor: "pointer" }}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="fw-medium">
                  {item.icon} {item.title}
                </span>

                <span
                  style={{
                    transition: "0.3s",
                    transform:
                      openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  ▼
                </span>
              </div>

              {/* Content */}
              <div
                style={{
                  maxHeight: openIndex === index ? "200px" : "0px",
                  overflowY: "auto",
                  transition: "max-height 0.3s ease",
                }}
              >
                <ul className="m-0 p-3">
                  {item.content.map((listItem, i) => (
                    <li key={i} className="py-1">
                      {listItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="col">
          <div className="fs-6 p-3" id="customdiv">
            <ul>
              <a href="#">
                <li className="mb-4">
                  Latest Intraday leverages and Square-off timings
                </li>
              </a>
              <a href="#">
                <li>Current Takeovers and Delisting - April 2026</li>
              </a>
            </ul>
          </div>

          <div>
            <h2>Quick links</h2>
            <ol>
              <li>Track Opening Account</li>
              <li>Track segment activation</li>
              <li>Intraday margins</li>
              <li>Kite user manual</li>
              <li>Learn how to create a ticket</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
