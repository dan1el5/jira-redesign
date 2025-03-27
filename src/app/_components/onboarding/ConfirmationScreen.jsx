import React from "react";

const ConfirmationScreen = ({ teamRole, workStyle, integrations }) => {
  // Helper function to get readable role name
  const getRoleName = (role) => {
    return role === "pm"
      ? "Project Management"
      : role === "dev"
      ? "Development"
      : role === "design"
      ? "Design"
      : "Marketing";
  };

  // Helper function to get readable workflow name
  const getWorkflowName = (style) => {
    return style === "agile"
      ? "Agile/Scrum"
      : style === "kanban"
      ? "Kanban"
      : style === "waterfall"
      ? "Waterfall"
      : "Task-based";
  };

  // Helper function to get readable integration name
  const getIntegrationName = (integration) => {
    return integration === "github"
      ? "GitHub"
      : integration === "slack"
      ? "Slack"
      : integration === "confluence"
      ? "Confluence"
      : "Figma";
  };
  
  return (
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
                  {getRoleName(teamRole)} focused tools
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
                      const name = getWorkflowName(w);
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
                      const name = getIntegrationName(i);
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
  );
};

export default ConfirmationScreen;