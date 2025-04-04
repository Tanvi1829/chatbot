import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ActionsButton = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Define an array of steps/pages in order
  const steps = ["/introduce_step_1", "/introduce_step_2", "/introduce_step_3", "/introduce_step_4", "/login_empty"];
  
  // Find the index of the current step
  const currentStepIndex = steps.indexOf(location.pathname);
  
  // Determine the next step (if available)
  const nextStep = currentStepIndex < steps.length - 1 ? steps[currentStepIndex + 1] : steps[currentStepIndex];

  return (
    <div className="d-flex justify-content-between align-items-center p-3 bg-light rounded-pill" style={{ marginTop: "1rem" }}>
      {/* Skip Button */}
      <button className="btn btn-link text-primary text-decoration-none" onClick={() => navigate(steps[steps.length - 1])}>
        Skip
      </button>

      {/* Pagination Dots */}
      <div className="d-flex gap-2">
        {steps.map((step, index) => (
          <span
            key={index}
            className={`rounded-circle bg-primary ${index === currentStepIndex ? "" : "opacity-50"}`}
            style={{ width: "10px", height: "10px" }}
          ></span>
        ))}
      </div>

      {/* Next Button */}
      <button
        className="bg-primary-subtle border border-0 rounded-pill px-4"
        style={{ height: "4rem" }}
        onClick={() => navigate(nextStep)}
      >
        Next
      </button>
    </div>
  );
};

export default ActionsButton;
