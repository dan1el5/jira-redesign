import React from "react";

const WorkflowStep = ({ workStyle, handleWorkStyleToggle, teamRole }) => {
  const workStyles = [
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
  ];
  
  return (
    <div className="transition-opacity duration-300">
      <div className="bg-teal-600 text-white p-4">
        <h1 className="text-xl font-bold">How does your team work?</h1>
        <p className="text-teal-100 text-sm">
          Select the methodologies that match your workflow
        </p>
      </div>
      <div className="p-5 space-y-4">
        {/* Work style options - Using Affordance principles */}
        {workStyles.map((style) => (
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
  );
};

export default WorkflowStep;