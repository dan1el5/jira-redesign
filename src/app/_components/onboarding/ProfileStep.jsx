import React from "react";
import Image from "next/image";

const ProfileStep = ({
  name,
  setName,
  email,
  setEmail,
  team,
  setTeam,
  loading,
  handleContinue,
  nameTouched,
  setNameTouched,
  emailTouched,
  setEmailTouched,
  teamTouched,
  setTeamTouched,
  isEmailValid,
  validateEmail,
  isFormValid,
  formSubmitted
}) => {
  return (
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
                      Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onBlur={() => setNameTouched(true)}
                      className={`w-full p-3 border ${
                        nameTouched && !name 
                          ? "border-red-500 bg-red-50" 
                          : "border-slate-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      placeholder="John Doe"
                      aria-required="true"
                      aria-invalid={nameTouched && !name ? "true" : "false"}
                    />
                    {nameTouched && !name && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Please enter your name
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-1 font-medium">
                      Work email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (emailTouched) {
                          validateEmail(e.target.value);
                        }
                      }}
                      onBlur={() => {
                        setEmailTouched(true);
                        validateEmail(email);
                      }}
                      className={`w-full p-3 border ${
                        emailTouched && (
                          !email 
                            ? "border-red-500 bg-red-50" 
                            : !isEmailValid 
                              ? "border-red-500 bg-red-50" 
                              : "border-green-500 bg-green-50"
                        )
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      placeholder="you@company.com"
                      aria-required="true"
                      aria-invalid={emailTouched && (!email || !isEmailValid) ? "true" : "false"}
                    />
                    {emailTouched && !email && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Please enter your email address
                      </p>
                    )}
                    {emailTouched && email && !isEmailValid && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Please enter a valid email address
                      </p>
                    )}
                    {emailTouched && email && isEmailValid && (
                      <p className="mt-1 text-sm text-green-600 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Email looks good
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-slate-700 mb-1 font-medium">
                      Team or organization name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={team}
                      onChange={(e) => setTeam(e.target.value)}
                      onBlur={() => setTeamTouched(true)}
                      className={`w-full p-3 border ${
                        teamTouched && !team 
                          ? "border-red-500 bg-red-50" 
                          : "border-slate-300"
                      } rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none`}
                      placeholder="Acme Inc."
                      aria-required="true"
                      aria-invalid={teamTouched && !team ? "true" : "false"}
                    />
                    {teamTouched && !team && (
                      <p className="mt-1 text-sm text-red-500 flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        Please enter your team or organization name
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  disabled={!isFormValid}
                  className={`w-full py-3 px-4 rounded-md font-medium mt-4 ${
                    !isFormValid
                      ? "bg-slate-200 text-slate-500 cursor-not-allowed"
                      : "bg-blue-600 hover:bg-blue-700 text-white"
                  }`}
                  aria-disabled={!isFormValid}
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

                {formSubmitted && !isFormValid && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
                    <div className="flex items-center mb-1">
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                      <strong>Please correct the following issues:</strong>
                    </div>
                    <ul className="list-disc pl-5 space-y-1">
                      {!name && <li>Enter your name</li>}
                      {!email && <li>Enter your email address</li>}
                      {email && !isEmailValid && <li>Enter a valid email address</li>}
                      {!team && <li>Enter your team or organization name</li>}
                    </ul>
                  </div>
                )}

                {isFormValid && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm flex items-start">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <strong>All set!</strong> Click "Continue" to set up your Jira workspace.
                    </div>
                  </div>
                )}

                <div className="mt-6 text-xs text-slate-500">
                  By completing this onboarding, I accept the <a href="#" className="text-blue-600 hover:underline">Atlassian Cloud Terms of
                  Service</a> and acknowledge the <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a>.
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
  );
}

export default ProfileStep;