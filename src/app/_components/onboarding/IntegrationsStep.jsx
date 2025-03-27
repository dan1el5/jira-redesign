import React from "react";

const IntegrationsStep = ({ integrations, handleIntegrationToggle, teamRole }) => {
  const integrationOptions = [
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
  ];
  
  return (
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
          {integrationOptions.map((integration) => (
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
  );
};

export default IntegrationsStep;