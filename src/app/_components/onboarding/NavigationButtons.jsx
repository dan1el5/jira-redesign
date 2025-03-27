import React from "react";

const NavigationButtons = ({
  currentStep,
  handleBack,
  handleNext,
  showConfirmation,
  loading,
  name,
  email,
  teamRole,
  workStyle
}) => {
  const isButtonDisabled = 
    loading ||
    (currentStep === 1 && (!name || !email)) ||
    (currentStep === 2 && !teamRole) ||
    (currentStep === 3 && workStyle.length === 0);

  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={handleBack}
        className={`px-4 py-2 border border-slate-300 rounded text-sm text-slate-700 hover:bg-slate-50 transition-colors ${
          currentStep === 1 && !showConfirmation ? "invisible" : ""
        }`}
      >
        {showConfirmation ? "Edit selections" : "Back"}
      </button>

      <button
        onClick={handleNext}
        className={`px-5 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded text-sm font-medium transition-colors ${
          isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        disabled={isButtonDisabled}
      >
        {loading ? (
          <div className="flex items-center">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            <span>
              {currentStep === 4 && !showConfirmation
                ? "Checking..."
                : "Processing..."}
            </span>
          </div>
        ) : showConfirmation ? (
          "Confirm and continue"
        ) : currentStep === 4 ? (
          "Review selections"
        ) : (
          "Continue"
        )}
      </button>
    </div>
  );
};

export default NavigationButtons;