import React from "react";

function Hero() {
  return (
    <div className="container p-5 border-bottom">
      <div className="row">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="fs-1 fw-medium">Support Portal</span>
          <button type="button" class="btn btn-info">
            My tickets
          </button>
        </div>
      </div>
      <div class="w-100">
        <div class="position-relative">
          <i class="fa fa-search position-absolute top-50 start-0 translate-middle-y ms-3 text-muted"></i>

          <input
            type="search"
            class="form-control ps-5 py-3 rounded"
            placeholder="Eg: How do I open my account, How do I activate F&O..."
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
