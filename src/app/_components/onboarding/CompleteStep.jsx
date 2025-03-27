import React from "react";

const CompleteStep = ({ teamRole, workStyle, integrations }) => {
  const getWorkflowDescription = () => {
    if (workStyle.includes("agile")) {
      return "Agile workflow with sprint planning";
    } else if (workStyle.includes("kanban")) {
      return "Kanban boards with workflow visualization";
    } else {
      return "Customized workflow templates";
    }
  };

  const getRoleName = () => {
    return teamRole === "pm"
      ? "project management"
      : teamRole === "dev"
      ? "development"
      : teamRole === "design"
      ? "design"
      : "marketing";
  };

  const getIntegrationNames = () => {
    return integrations.map((i, index) => {
      const name = i === "github"
        ? "GitHub"
        : i === "slack"
        ? "Slack"
        : i === "confluence"
        ? "Confluence"
        : "Figma";

      return index === integrations.length - 1 ? name : `${name}, `;
    });
  };

  return (
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
                    {getRoleName()}
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
                  {getWorkflowDescription()}
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
                  {getIntegrationNames()}
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
  );
};

export default CompleteStep;