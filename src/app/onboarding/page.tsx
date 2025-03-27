"use client";

import React, { useState, useEffect } from "react";
import JiraIcon from "../_components/onboarding/JiraIcon"
import StepIndicator from "../_components/onboarding/StepIndicator";
import NavigationButtons from "../_components/onboarding/NavigationButtons";
import ProfileStep from "../_components/onboarding/ProfileStep";
import RoleStep from "../_components/onboarding/RoleStep";
import WorkflowStep from "../_components/onboarding/WorkflowStep";
import IntegrationsStep from "../_components/onboarding/IntegrationsStep";
import ConfirmationScreen from "../_components/onboarding/ConfirmationScreen";
import CompleteStep from "../_components/onboarding/CompleteStep";


export default function OnboardingPage() {
  // --- STATE MANAGEMENT ---
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [workStyle, setWorkStyle] = useState([]);
  const [integrations, setIntegrations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  // Form validation states
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [teamTouched, setTeamTouched] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Update progress when step changes
  useEffect(() => {
    setProgress(currentStep * 20);
  }, [currentStep]);

  // --- EVENT HANDLERS ---
  const handleNext = () => {
    if (currentStep === 4 && !showConfirmation) {
      setShowConfirmation(true);
      return;
    }

    if (currentStep < 5) {
      setLoading(true);
      setShowConfirmation(false);
      // Simulate loading for better UX feedback
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        setLoading(false);
      }, 400);
    }
  };

  const handleBack = () => {
    if (showConfirmation) {
      setShowConfirmation(false);
      return;
    }

    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleWorkStyleToggle = (style) => {
    if (workStyle.includes(style)) {
      setWorkStyle(workStyle.filter((item) => item !== style));
    } else {
      setWorkStyle([...workStyle, style]);
    }
  };

  const handleIntegrationToggle = (integration) => {
    if (integrations.includes(integration)) {
      setIntegrations(integrations.filter((item) => item !== integration));
    } else {
      setIntegrations([...integrations, integration]);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailRegex.test(email));
  };

  const isFormValid = name.trim() !== '' && email.trim() !== '' && isEmailValid && team.trim() !== '';

  const handleContinue = () => {
    setFormSubmitted(true);
    
    // Mark all fields as touched
    setNameTouched(true);
    setEmailTouched(true);
    setTeamTouched(true);
    
    // Validate email
    validateEmail(email);
    
    // If form is valid, proceed with submission
    if (isFormValid) {
      setLoading(true);
      
      // Simulate API call
      setTimeout(() => {
        setLoading(false);
        // Show confirmation dialog before proceeding
        const confirmed = window.confirm(
          `Please confirm your information:\n\nName: ${name}\nEmail: ${email}\nTeam: ${team}\n\nIs this correct?`
        );
        
        if (confirmed) {
          handleNext(); // Your original navigation function
        }
      }, 1500);
    } else {
      // Scroll to the first error
      const firstError = document.querySelector('[aria-invalid="true"]');
      if (firstError) {
        firstError.focus();
        firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  // Steps configuration for the progress indicator
  const steps = [
    { step: 1, label: "Profile" },
    { step: 2, label: "Role" },
    { step: 3, label: "Workflow" },
    { step: 4, label: "Tools" },
    { step: 5, label: "Complete" }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header - Using Similarity principle for consistent branding */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <JiraIcon />
            <span className="text-xl font-bold text-slate-800">Jira</span>
            <div className="hidden sm:block ml-3 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-600">
              Setup Wizard
            </div>
          </div>
          <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">
            Skip setup
          </button>
        </div>
      </header>

      {/* Progress steps - Using Progressive Disclosure & Feedback principles */}
      <div className="bg-white border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <React.Fragment key={step.step}>
                <StepIndicator 
                  step={step.step} 
                  label={step.label} 
                  currentStep={currentStep} 
                />
                {index < steps.length - 1 && (
                  <div className="h-1 flex-1 bg-slate-200 mx-2">
                    <div
                      className="h-1 bg-blue-600 transition-all duration-300"
                      style={{ 
                        width: index === 0 
                          ? `${progress - 20}%` 
                          : currentStep > step.step 
                            ? "100%" 
                            : "0%" 
                      }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 transition-all duration-300">
          {/* Step 1 - Profile */}
          {currentStep === 1 && (
            <ProfileStep 
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              team={team}
              setTeam={setTeam}
              loading={loading}
              handleContinue={handleContinue}
              nameTouched={nameTouched}
              setNameTouched={setNameTouched}
              emailTouched={emailTouched}
              setEmailTouched={setEmailTouched}
              teamTouched={teamTouched}
              setTeamTouched={setTeamTouched}
              isEmailValid={isEmailValid}
              validateEmail={validateEmail}
              isFormValid={isFormValid}
              formSubmitted={formSubmitted}
            />
          )}

          {/* Step 2 - Role */}
          {currentStep === 2 && (
            <RoleStep 
              teamRole={teamRole}
              setTeamRole={setTeamRole}
            />
          )}

          {/* Step 3 - Workflow */}
          {currentStep === 3 && (
            <WorkflowStep 
              workStyle={workStyle}
              handleWorkStyleToggle={handleWorkStyleToggle}
              teamRole={teamRole}
            />
          )}

          {/* Step 4 - Integrations */}
          {currentStep === 4 && !showConfirmation && (
            <IntegrationsStep 
              integrations={integrations}
              handleIntegrationToggle={handleIntegrationToggle}
              teamRole={teamRole}
            />
          )}

          {/* Confirmation Screen */}
          {currentStep === 4 && showConfirmation && (
            <ConfirmationScreen 
              teamRole={teamRole}
              workStyle={workStyle}
              integrations={integrations}
            />
          )}

          {/* Step 5 - Complete */}
          {currentStep === 5 && (
            <CompleteStep 
              teamRole={teamRole}
              workStyle={workStyle}
              integrations={integrations}
            />
          )}
        </div>

        {/* Navigation buttons */}
        {currentStep < 5 && (
          <NavigationButtons 
            currentStep={currentStep}
            handleBack={handleBack}
            handleNext={handleNext}
            showConfirmation={showConfirmation}
            loading={loading}
            name={name}
            email={email}
            teamRole={teamRole}
            workStyle={workStyle}
          />
        )}
      </div>
    </div>
  );
}