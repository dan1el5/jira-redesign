"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function OnboardingPage() {
  // --- STATE MANAGEMENT ---
  const [currentStep, setCurrentStep] = useState(1);
  const [progress, setProgress] = useState(20);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [team, setTeam] = useState("");
  const [teamRole, setTeamRole] = useState("");
  const [workStyle, setWorkStyle] = useState<string[]>([]);
  const [integrations, setIntegrations] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

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

  const handleWorkStyleToggle = (style: string) => {
    if (workStyle.includes(style)) {
      setWorkStyle(workStyle.filter((item) => item !== style));
    } else {
      setWorkStyle([...workStyle, style]);
    }
  };

  const handleIntegrationToggle = (integration: string) => {
    if (integrations.includes(integration)) {
      setIntegrations(integrations.filter((item) => item !== integration));
    } else {
      setIntegrations([...integrations, integration]);
    }
  };

  // --- UI COMPONENTS ---
  // Logo component
  const JiraLogo = () => (
    <svg
      className="h-8 w-8 text-blue-600"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9962 0L29.9925 14.3169H21.3284C18.3802 14.3169 15.9962 11.9212 15.9962 8.95804V0Z"
        fill="#2684FF"
      />
      <path
        d="M15.9967 17.683L2 32.0001H10.664C13.6123 32.0001 15.9967 29.6044 15.9967 26.6416V17.683Z"
        fill="#2684FF"
      />
      <path
        d="M15.9962 8.95804C15.9962 11.9212 18.3802 14.3169 21.3284 14.3169H29.9925L15.9962 0V8.95804Z"
        fill="url(#paint0_linear)"
      />
      <path
        d="M15.9967 26.6416C15.9967 29.6044 13.6123 32.0001 10.664 32.0001H2L15.9967 17.683V26.6416Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="16.3774"
          y1="7.69321"
          x2="25.4223"
          y2="12.8991"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" stopOpacity="0" />
          <stop offset="1" stopColor="#0052CC" stopOpacity="0.8" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="15.6155"
          y1="24.2981"
          x2="6.57058"
          y2="19.0922"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.18" stopColor="#0052CC" stopOpacity="0" />
          <stop offset="1" stopColor="#0052CC" stopOpacity="0.8" />
        </linearGradient>
      </defs>
    </svg>
  );

  // Progress step indicator (applying Similarity & Feedback principles)
  const StepIndicator = ({ step, label }: { step: number; label: string }) => (
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

  // --- MAIN COMPONENT RENDER ---
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header - Using Similarity principle for consistent branding */}
      <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-slate-200">
        <div className="max-w-3xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <JiraLogo />
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
            <StepIndicator step={1} label="Profile" />
            <div className="h-1 flex-1 bg-slate-200 mx-2">
              <div
                className="h-1 bg-blue-600 transition-all duration-300"
                style={{ width: `${progress - 20}%` }}
              />
            </div>
            <StepIndicator step={2} label="Role" />
            <div className="h-1 flex-1 bg-slate-200 mx-2">
              <div
                className="h-1 bg-blue-600 transition-all duration-300"
                style={{ width: currentStep > 2 ? "100%" : "0%" }}
              />
            </div>
            <StepIndicator step={3} label="Workflow" />
            <div className="h-1 flex-1 bg-slate-200 mx-2">
              <div
                className="h-1 bg-blue-600 transition-all duration-300"
                style={{ width: currentStep > 3 ? "100%" : "0%" }}
              />
            </div>
            <StepIndicator step={4} label="Tools" />
            <div className="h-1 flex-1 bg-slate-200 mx-2">
              <div
                className="h-1 bg-blue-600 transition-all duration-300"
                style={{ width: currentStep > 4 ? "100%" : "0%" }}
              />
            </div>
            <StepIndicator step={5} label="Complete" />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6 transition-all duration-300">
          {/* Step 1 - Profile - Using Proximity principle for form grouping */}
          {currentStep === 1 && (
            <div className="transition-opacity duration-300 bg-slate-50 min-h-screen">
              <div className="max-w-full mx-auto">
                <div className="bg-white shadow-sm rounded-lg overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    {/* Left column - Text and form */}
                    <div className="p-8 lg:p-12">
                      <h1 className="text-3xl font-bold text-slate-800 mb-2">
                        Start your Jira Onboarding
                      </h1>
                      <p className="text-slate-600 mb-8">
                        The only project management tool you need to plan and
                        track work across every team.
                      </p>

                      <div className="space-y-6">
                        <div>
                          <h2 className="text-xl font-semibold text-slate-700 mb-2">
                            Step 1: Tell us about yourself
                          </h2>
                          <p className="text-sm text-slate-500 mb-6">
                            Complete this information to create your
                            personalized Jira workspace.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-slate-700 mb-1 font-medium">
                              Your name
                            </label>
                            <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                              placeholder="John Doe"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-700 mb-1 font-medium">
                              Work email
                            </label>
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                              placeholder="you@company.com"
                            />
                          </div>

                          <div>
                            <label className="block text-slate-700 mb-1 font-medium">
                              Team or organization name
                            </label>
                            <input
                              type="text"
                              value={team}
                              onChange={(e) => setTeam(e.target.value)}
                              className="w-full p-3 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                              placeholder="Acme Inc."
                            />
                          </div>
                        </div>

                        <button
                          onClick={handleNext}
                          disabled={!name || !email}
                          className={`w-full py-3 px-4 rounded-md font-medium mt-4 ${
                            !name || !email
                              ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                              : "bg-blue-600 hover:bg-blue-700 text-white"
                          }`}
                        >
                          {loading ? (
                            <div className="flex items-center justify-center">
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
                              <span>Continue</span>
                            </div>
                          ) : (
                            "Continue"
                          )}
                        </button>

                        <div className="mt-6 text-xs text-slate-500">
                          By completing this onboarding, I accept the Atlassian
                          Cloud Terms of Service and acknowledge the Privacy
                          Policy.
                        </div>
                      </div>
                    </div>

                    {/* Right column - Image */}
                    <div className="hidden md:block bg-slate-50 p-8 lg:p-12 relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
                      <div className="relative">
                        <h2 className="text-xl font-semibold text-slate-800 mb-4">
                          Complete your onboarding to get:
                        </h2>
                        <ul className="space-y-3 mb-8">
                          <li className="flex">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                            <span className="text-slate-700">
                              Personalized workspace setup
                            </span>
                          </li>
                          <li className="flex">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                            <span className="text-slate-700">
                              Custom workflows for your team
                            </span>
                          </li>
                          <li className="flex">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                            <span className="text-slate-700">
                              Integrations with your favorite tools
                            </span>
                          </li>
                          <li className="flex">
                            <svg
                              className="h-5 w-5 text-green-500 mr-2 flex-shrink-0"
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
                            <span className="text-slate-700">
                              Ready-to-use project templates
                            </span>
                          </li>
                        </ul>

                        <div className="rounded-lg overflow-hidden shadow-lg border border-slate-200">
                          <Image
                            src="/Jira.png"
                            alt="Jira interface preview"
                            width={500}
                            height={300}
                            className="w-full h-auto"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 2 - Role - Using Similarity principle for selection options */}
          {currentStep === 2 && (
            <div className="transition-opacity duration-300">
              <div className="bg-purple-600 text-white p-4">
                <h1 className="text-xl font-bold">Tell us about your role</h1>
                <p className="text-purple-100 text-sm">
                  We will customize your dashboard based on what you do
                </p>
              </div>
              <div className="p-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Role selection cards - Using Affordance & Similarity principles */}
                  {[
                    {
                      id: "pm",
                      label: "Project Manager",
                      desc: "Track projects and team priorities",
                    },
                    {
                      id: "dev",
                      label: "Developer",
                      desc: "Write code and manage technical tasks",
                    },
                    {
                      id: "design",
                      label: "Designer",
                      desc: "Create visual assets and interfaces",
                    },
                    {
                      id: "marketing",
                      label: "Marketing",
                      desc: "Plan campaigns and track activities",
                    },
                  ].map((role) => (
                    <div
                      key={role.id}
                      onClick={() => setTeamRole(role.id)}
                      className={`cursor-pointer transition-all duration-200 p-3 rounded-md border-2 hover:shadow-md
                      ${
                        teamRole === role.id
                          ? "border-blue-600 bg-blue-50"
                          : "border-slate-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center
                          ${
                            teamRole === role.id
                              ? "bg-blue-600"
                              : "border border-slate-300"
                          }`}
                        >
                          {teamRole === role.id && (
                            <svg
                              className="h-3 w-3 text-white"
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
                          )}
                        </div>
                        <div>
                          <p className="font-medium text-slate-800">
                            {role.label}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {role.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Progressive Disclosure for selected role */}
                {teamRole && (
                  <div className="mt-4 p-3 bg-blue-50 rounded-md border border-blue-100 transition-all duration-300">
                    <h3 className="font-medium text-sm text-blue-800 flex items-center">
                      <svg
                        className="h-4 w-4 text-blue-600 mr-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      Based on your role, we will customize your workspace with:
                    </h3>
                    <ul className="mt-2 text-xs text-slate-700 space-y-1 ml-6">
                      {teamRole === "pm" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>{" "}
                            Project roadmap and timeline tools
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>{" "}
                            Resource allocation dashboards
                          </li>
                        </>
                      )}
                      {teamRole === "dev" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span> Code
                            integration features
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>{" "}
                            Developer workflow templates
                          </li>
                        </>
                      )}
                      {teamRole === "design" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span> Design
                            review workflows
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span> Asset
                            management tools
                          </li>
                        </>
                      )}
                      {teamRole === "marketing" && (
                        <>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>{" "}
                            Campaign planning templates
                          </li>
                          <li className="flex items-start">
                            <span className="text-blue-500 mr-1">•</span>{" "}
                            Content calendar views
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3 - Work Style - Using Affordance & Feedback principles */}
          {currentStep === 3 && (
            <div className="transition-opacity duration-300">
              <div className="bg-teal-600 text-white p-4">
                <h1 className="text-xl font-bold">How does your team work?</h1>
                <p className="text-teal-100 text-sm">
                  Select the methodologies that match your workflow
                </p>
              </div>
              <div className="p-5 space-y-4">
                {/* Work style options - Using Affordance principles */}
                {[
                  {
                    id: "agile",
                    label: "Agile / Scrum",
                    desc: "Work in sprints with regular planning",
                    recommended: teamRole === "dev" || teamRole === "pm",
                  },
                  {
                    id: "kanban",
                    label: "Kanban",
                    desc: "Visualize and limit work in progress",
                    recommended: teamRole === "design",
                  },
                  {
                    id: "waterfall",
                    label: "Waterfall",
                    desc: "Sequential project phases with deliverables",
                    recommended: false,
                  },
                  {
                    id: "taskbased",
                    label: "Simple Task Tracking",
                    desc: "Track work without formal methodology",
                    recommended: teamRole === "marketing",
                  },
                ].map((style) => (
                  <div key={style.id} className="relative">
                    {style.recommended && (
                      <div className="absolute -right-1 -top-1 z-10 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                        Recommended
                      </div>
                    )}
                    <div
                      onClick={() => handleWorkStyleToggle(style.id)}
                      className={`cursor-pointer transition-all duration-200 p-3 rounded-md border-2 hover:shadow-sm
                      ${
                        workStyle.includes(style.id)
                          ? "border-teal-600 bg-teal-50"
                          : "border-slate-200 hover:border-teal-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-medium text-slate-800">
                            {style.label}
                          </p>
                          <p className="text-xs text-slate-500 mt-0.5">
                            {style.desc}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200
                          ${
                            workStyle.includes(style.id)
                              ? "bg-teal-600 border-teal-600 text-white"
                              : "border-slate-300"
                          }`}
                        >
                          {workStyle.includes(style.id) && (
                            <svg
                              className="w-3 h-3"
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
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Progressive Disclosure for Agile features */}
                {workStyle.includes("agile") && (
                  <div className="mt-3 p-3 bg-teal-50 rounded-md border border-teal-200 transition-all duration-300">
                    <p className="text-sm font-medium text-teal-800">
                      Agile features to set up:
                    </p>
                    <div className="grid grid-cols-2 gap-2 mt-2">
                      <div className="flex items-center text-xs text-slate-700">
                        <svg
                          className="h-3 w-3 text-teal-600 mr-1.5"
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
                        Sprint planning tools
                      </div>
                      <div className="flex items-center text-xs text-slate-700">
                        <svg
                          className="h-3 w-3 text-teal-600 mr-1.5"
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
                        Story point estimation
                      </div>
                      <div className="flex items-center text-xs text-slate-700">
                        <svg
                          className="h-3 w-3 text-teal-600 mr-1.5"
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
                        Burndown charts
                      </div>
                      <div className="flex items-center text-xs text-slate-700">
                        <svg
                          className="h-3 w-3 text-teal-600 mr-1.5"
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
                        Sprint review workflows
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4 - Integrations - Using Similarity principles for consistent selection UI */}
          {currentStep === 4 && !showConfirmation && (
            <div className="transition-opacity duration-300">
              <div className="bg-blue-600 text-white p-4">
                <h1 className="text-xl font-bold">Connect your tools</h1>
                <p className="text-blue-100 text-sm">
                  Streamline your workflow with integrations
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Integration options - Using Similarity & Affordance principles */}
                  {[
                    {
                      id: "github",
                      label: "GitHub",
                      desc: "Link repositories and track code",
                      recommended: teamRole === "dev",
                    },
                    {
                      id: "slack",
                      label: "Slack",
                      desc: "Get notifications and updates",
                      recommended: true,
                    },
                    {
                      id: "confluence",
                      label: "Confluence",
                      desc: "Connect your knowledge base",
                      recommended: teamRole === "pm",
                    },
                    {
                      id: "figma",
                      label: "Figma",
                      desc: "Sync design files and prototypes",
                      recommended: teamRole === "design",
                    },
                  ].map((integration) => (
                    <div key={integration.id} className="relative">
                      {integration.recommended && (
                        <div className="absolute -right-1 -top-1 z-10 px-2 py-0.5 text-xs bg-green-500 text-white rounded-full">
                          Recommended
                        </div>
                      )}
                      <div
                        onClick={() => handleIntegrationToggle(integration.id)}
                        className={`cursor-pointer transition-all duration-200 p-3 rounded-md border-2 hover:shadow-sm
                        ${
                          integrations.includes(integration.id)
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 hover:border-blue-300"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-medium text-slate-800">
                              {integration.label}
                            </p>
                            <p className="text-xs text-slate-500 mt-0.5">
                              {integration.desc}
                            </p>
                          </div>
                          <div
                            className={`w-5 h-5 rounded border flex items-center justify-center transition-all duration-200
                            ${
                              integrations.includes(integration.id)
                                ? "bg-blue-600 border-blue-600 text-white"
                                : "border-slate-300"
                            }`}
                          >
                            {integrations.includes(integration.id) && (
                              <svg
                                className="w-3 h-3"
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
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tip section */}
                <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-blue-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-xs text-blue-700">
                      We will securely connect these tools to your Jira
                      workspace to streamline your workflow and reduce manual
                      updates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Confirmation Screen - Using Confirmation principle */}
          {currentStep === 4 && showConfirmation && (
            <div className="transition-opacity duration-300">
              <div className="bg-indigo-600 text-white p-4">
                <h1 className="text-xl font-bold">Confirm your selections</h1>
                <p className="text-indigo-100 text-sm">
                  Review your choices before we set up your workspace
                </p>
              </div>
              <div className="p-5 space-y-4">
                <div className="bg-indigo-50 p-4 rounded-md border border-indigo-100">
                  <h3 className="font-medium text-sm text-indigo-800 mb-3">
                    Your workspace will include:
                  </h3>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <svg
                        className="h-4 w-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
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
                      <div>
                        <p className="text-sm font-medium text-slate-700">
                          Role-based dashboard
                        </p>
                        <p className="text-xs text-slate-500">
                          {teamRole === "pm"
                            ? "Project Management"
                            : teamRole === "dev"
                            ? "Development"
                            : teamRole === "design"
                            ? "Design"
                            : "Marketing"}{" "}
                          focused tools
                        </p>
                      </div>
                    </div>

                    {workStyle.length > 0 && (
                      <div className="flex items-start">
                        <svg
                          className="h-4 w-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
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
                        <div>
                          <p className="text-sm font-medium text-slate-700">
                            Workflow configuration
                          </p>
                          <p className="text-xs text-slate-500">
                            {workStyle.map((w, i) => {
                              const name =
                                w === "agile"
                                  ? "Agile/Scrum"
                                  : w === "kanban"
                                  ? "Kanban"
                                  : w === "waterfall"
                                  ? "Waterfall"
                                  : "Task-based";
                              return i === workStyle.length - 1
                                ? name
                                : `${name}, `;
                            })}{" "}
                            workflow
                          </p>
                        </div>
                      </div>
                    )}

                    {integrations.length > 0 && (
                      <div className="flex items-start">
                        <svg
                          className="h-4 w-4 text-indigo-600 mt-0.5 mr-2 flex-shrink-0"
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
                        <div>
                          <p className="text-sm font-medium text-slate-700">
                            Tool integrations
                          </p>
                          <p className="text-xs text-slate-500">
                            {integrations.map((i, index) => {
                              const name =
                                i === "github"
                                  ? "GitHub"
                                  : i === "slack"
                                  ? "Slack"
                                  : i === "confluence"
                                  ? "Confluence"
                                  : "Figma";

                              return index === integrations.length - 1
                                ? name
                                : `${name}, `;
                            })}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                  <div className="flex items-start">
                    <svg
                      className="w-4 h-4 text-yellow-600 mt-0.5 mr-2 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                      />
                    </svg>
                    <p className="text-xs text-yellow-800">
                      This will set up your Jira workspace with these
                      preferences. You can always change these settings later.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5 - Complete - Using Feedback principle */}
          {currentStep === 5 && (
            <div className="transition-opacity duration-300">
              <div className="bg-green-600 text-white p-5 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white mb-3">
                  <svg
                    className="h-8 w-8 text-green-600"
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
                </div>
                <h1 className="text-xl font-bold mb-1">
                  Your Jira workspace is ready!
                </h1>
                <p className="text-green-100 text-sm max-w-md mx-auto">
                  We have set up your personalized workspace based on your
                  preferences.
                </p>
              </div>

              <div className="p-5 space-y-5">
                {/* Summary Box - Using Progressive Disclosure principle */}
                <div className="bg-green-50 p-4 rounded-md border border-green-100">
                  <h3 className="font-medium text-sm text-slate-800 mb-3">
                    Your workspace includes:
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-start">
                      <svg
                        className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0"
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
                      <div>
                        <span className="text-sm text-slate-700">
                          A{" "}
                          <span className="font-medium">
                            {teamRole === "pm"
                              ? "project management"
                              : teamRole === "dev"
                              ? "development"
                              : teamRole === "design"
                              ? "design"
                              : "marketing"}
                          </span>{" "}
                          dashboard with relevant tools
                        </span>
                      </div>
                    </div>

                    {workStyle.length > 0 && (
                      <div className="flex items-start">
                        <svg
                          className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0"
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
                        <span className="text-sm text-slate-700">
                          {workStyle.includes("agile")
                            ? "Agile workflow with sprint planning"
                            : workStyle.includes("kanban")
                            ? "Kanban boards with workflow visualization"
                            : "Customized workflow templates"}
                        </span>
                      </div>
                    )}

                    {integrations.length > 0 && (
                      <div className="flex items-start">
                        <svg
                          className="h-4 w-4 text-green-600 mt-0.5 mr-2 flex-shrink-0"
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
                        <span className="text-sm text-slate-700">
                          Connected integrations with{" "}
                          {integrations.map((i, index) => {
                            const name =
                              i === "github"
                                ? "GitHub"
                                : i === "slack"
                                ? "Slack"
                                : i === "confluence"
                                ? "Confluence"
                                : "Figma";

                            return index === integrations.length - 1
                              ? name
                              : `${name}, `;
                          })}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Next steps - Using Affordance principle */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="bg-white border border-slate-200 rounded-md p-4 text-center hover:shadow-sm transition-shadow">
                    <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-800 mb-1">
                      Create a project
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">
                      Get started with your first project
                    </p>
                    <button className="text-xs text-blue-600 border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition-colors w-full">
                      Create project
                    </button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-md p-4 text-center hover:shadow-sm transition-shadow">
                    <div className="w-8 h-8 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-800 mb-1">
                      Invite your team
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">
                      Collaborate with teammates
                    </p>
                    <button className="text-xs text-blue-600 border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition-colors w-full">
                      Invite members
                    </button>
                  </div>

                  <div className="bg-white border border-slate-200 rounded-md p-4 text-center hover:shadow-sm transition-shadow">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                    <h4 className="text-sm font-medium text-slate-800 mb-1">
                      Take a tour
                    </h4>
                    <p className="text-xs text-slate-500 mb-2">
                      Learn how to use Jira
                    </p>
                    <button className="text-xs text-blue-600 border border-blue-600 rounded px-3 py-1 hover:bg-blue-50 transition-colors w-full">
                      Start tour
                    </button>
                  </div>
                </div>

                <div className="flex justify-center mt-4">
                  <button className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white rounded font-medium transition-colors">
                    Go to your workspace
                  </button>
                </div>

                {/* Final confirmation feedback - Using Feedback principle */}
                <div className="mt-3 text-center">
                  <div className="flex items-center justify-center text-xs text-slate-500">
                    <svg
                      className="h-3 w-3 text-slate-400 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    <span>
                      Your settings are saved and can be changed anytime
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Navigation buttons - Using Visibility & Affordance principles */}
        {currentStep < 5 && (
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
                (currentStep === 1 && (!name || !email)) ||
                (currentStep === 2 && !teamRole) ||
                (currentStep === 3 && workStyle.length === 0)
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              disabled={
                loading ||
                (currentStep === 1 && (!name || !email)) ||
                (currentStep === 2 && !teamRole) ||
                (currentStep === 3 && workStyle.length === 0)
              }
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
        )}
      </div>
    </div>
  );
}
