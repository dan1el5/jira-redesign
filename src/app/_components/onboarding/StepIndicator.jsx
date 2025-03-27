import React from "react";

const StepIndicator = ({ step, label, currentStep }) => (
  <div className="flex flex-col items-center group">
    <div
      className={`h-9 w-9 rounded-full flex items-center justify-center transition-all duration-300 
      ${
        currentStep >= step
          ? "bg-blue-600 text-white"
          : "bg-slate-200 text-slate-500"
      }
      ${currentStep === step ? "ring-2 ring-blue-200 ring-offset-2" : ""}
      `}
    >
      {currentStep > step ? (
        <svg
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      ) : (
        <span>{step}</span>
      )}
    </div>
    <span
      className={`mt-2 text-xs font-medium transition-colors duration-200 ${
        currentStep >= step ? "text-blue-600" : "text-slate-500"
      }`}
    >
      {label}
    </span>
  </div>
);

export default StepIndicator;