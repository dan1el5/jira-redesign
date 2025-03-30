// src/components/RecentActivityWidget.tsx

import "./Widget.css";

const activities = [
  {
    user: "Dannie",
    statusFrom: "To Do",
    statusTo: "To Do",
    taskId: "OPS-6",
    taskTitle: "(Sample) Payment Confirmation",
    taskStatus: "TO DO",
    statusColor: "#dfe1e6",
    timestamp: "about 2 hours ago",
  },
  {
    user: "Alice",
    statusFrom: "To Do",
    statusTo: "In Progress",
    taskId: "OPS-3",
    taskTitle: "(Sample) Password Recovery",
    taskStatus: "IN PROGRESS",
    statusColor: "#E6F0FF",
    timestamp: "about 2 hours ago",
  },
  {
    user: "Bob",
    statusFrom: "To Do",
    statusTo: "In Progress",
    taskId: "OPS-4",
    taskTitle: "(Sample) Credit Card Payment",
    taskStatus: "IN PROGRESS",
    statusColor: "#E6F0FF",
    timestamp: "about 2 hours ago",
  },
];

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

function RecentActivityWidget() {
  return (
    <div className="widget" style={{ minHeight: "295px", display: "flex", flexDirection: "column" }}>
      <h2 style={{ marginBottom: "0rem" }}>Recent activity</h2>
      <p style={{ marginBottom: "1.5rem", fontSize: "0.9rem" }}>
        Stay up to date with what's happening across the project.
      </p>

      <div style={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: "0.8rem", paddingRight: "0.5rem" }}>
        {activities.map((activity, idx) => (
          <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
            {/* Avatar */}
            <div
              style={{
                backgroundColor: "#D3D6DB",
                color: "#333",
                width: 28,
                height: 28,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
                fontSize: "0.75rem",
                flexShrink: 0,
              }}
            >
              {getInitials(activity.user)}
            </div>

            {/* Content */}
            <div style={{ fontSize: "0.88rem", lineHeight: 1.1 }}>
              <div>
                <a href="#" style={{ fontWeight: 600, color: "#0052CC", textDecoration: "none" }}>
                  {activity.user}
                </a>{" "}
                changed the Status from{" "}
                <strong>{activity.statusFrom}</strong> to{" "}
                <strong>{activity.statusTo}</strong> on{" "}
                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                  <input
                    type="checkbox"
                    checked
                    readOnly
                    style={{ pointerEvents: "none", margin: 0 }}
                  />
                  <span style={{ fontWeight: 500, color: "#0052CC" }}>{activity.taskId}</span>
                  <span style={{ color: "#333" }}>{activity.taskTitle}</span>
                  <span
                    style={{
                      backgroundColor: activity.statusColor,
                      color: "#333",
                      padding: "0 6px",
                      borderRadius: "4px",
                      fontSize: "0.7rem",
                      fontWeight: 600,
                    }}
                  >
                    {activity.taskStatus}
                  </span>
                </span>
              </div>
              <div style={{ fontSize: "0.75rem", color: "#6B778C", marginTop: "0.25rem" }}>
                {activity.timestamp}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentActivityWidget;
