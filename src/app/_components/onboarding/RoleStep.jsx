import React from "react";

const RoleStep = ({ teamRole, setTeamRole }) => {
  const roles = [
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
  ];
  
  return (
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
          {roles.map((role) => (
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
  );
};

export default RoleStep;