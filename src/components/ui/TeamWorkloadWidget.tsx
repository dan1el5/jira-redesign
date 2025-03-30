// src/components/TeamWorkloadWidget.tsx

import "./Widget.css";

const assignees = [
  {
    name: "Dannie",
    avatar: "https://ui-avatars.com/api/?name=Daniel", // use a gray user icon
    workload: 25,
  },
  {
    name: "Alice",
    avatar: "https://ui-avatars.com/api/?name=Alice",
    workload: 20,
  },
  {
    name: "Bob",
    avatar: "https://ui-avatars.com/api/?name=Bob",
    workload: 15,
  },
  {
    name: "Charlie",
    avatar: "https://ui-avatars.com/api/?name=Charlie",
    workload: 40,
  },
];

function TeamWorkloadWidget() {
  return (
    <div className="widget" style={{ minHeight: "295px" }}>
      <h2>Team workload</h2>
      <p style={{ marginBottom: "1rem" }}>
        Monitor the capacity of your team.{" "}
        <a href="#" style={{ color: "#0052CC", fontWeight: 500 }}>
          Reassign issues to get the right balance
        </a>
      </p>

      <div style={{ display: "flex", fontWeight: "bold", marginBottom: "0.5rem", fontSize: "0.9rem" }}>
        <div style={{ flex: 1 }}>Assignee</div>
        <div style={{ flex: 2 }}>Work distribution</div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {assignees.map((person) => (
          <div key={person.name} style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            {/* Left: Avatar + Name */}
            <div style={{ flex: 1, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <img
                src={person.avatar}
                alt={person.name}
                style={{ width: 20, height: 20, borderRadius: "50%" }}
              />
              <span>{person.name}</span>
            </div>

            {/* Right: Progress Bar */}
            <div style={{ flex: 2, height: "16px", backgroundColor: "#D3D6DB", borderRadius: "4px", position: "relative", overflow: "hidden" }}>
              <div
                style={{
                  width: `${person.workload}%`,
                  backgroundColor: "#6B778C",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "0.75rem",
                  color: "white",
                }}
              >
                {person.workload}%
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamWorkloadWidget;
