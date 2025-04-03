// src/components/EpicProgressWidget.tsx

import epicIcon from "@/app/epic-icon.svg";
import "./Widget.css";

const epics = [
  {
    id: "OPS-1",
    name: "(Sample) User Authentication",
    donePercent: 50,
    inProgressPercent: 50,
  },
  {
    id: "OPS-2",
    name: "(Sample) Payment Processing",
    donePercent: 0,
    inProgressPercent: 50,
  },
];

const colors = {
  done: "#7FBA00",
  inProgress: "#2684FF",
  remaining: "#6B778C",
};

function EpicProgressWidget() {
  return (
    <div className="widget" style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
      <h2>Epic progress</h2>
      <p style={{ marginBottom: "1rem" }}>
        See how your epics are progressing at a glance.{" "}
        <a href="#" style={{ color: "#0052CC", fontWeight: 500 }}>
          View all epics
        </a>
      </p>

      {/* Legend */}
      <div
        style={{
          display: "flex",
          gap: "1.5rem",
          marginBottom: "1rem",
          fontSize: "0.85rem",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.done,
              display: "inline-block",
              borderRadius: "2px",
            }}
          ></span>
          <span>Done</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.inProgress,
              display: "inline-block",
              borderRadius: "2px",
            }}
          ></span>
          <span>In progress</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
          <span
            style={{
              width: 10,
              height: 10,
              backgroundColor: colors.remaining,
              display: "inline-block",
              borderRadius: "2px",
            }}
          ></span>
          <span>To do</span>
        </div>
      </div>

      {/* Epics list */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {epics.map((epic) => {
          const remaining = 100 - epic.donePercent - epic.inProgressPercent;
          return (
            <div key={epic.id}>
              {/* Epic Label */}
              <div style={{ marginBottom: "0.3rem", fontWeight: 500, fontSize: "0.9rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontSize: "1rem", color: "#a362ea" }}>⚡</span>
                {epic.id} {epic.name}
              </div>

              {/* Progress bar */}
              <div style={{ display: "flex", height: "16px", borderRadius: "4px", overflow: "hidden" }}>
                {epic.donePercent > 0 && (
                  <div
                    style={{
                      width: `${epic.donePercent}%`,
                      backgroundColor: colors.done,
                      color: "white",
                      fontSize: "0.7rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {epic.donePercent}%
                  </div>
                )}
                {epic.inProgressPercent > 0 && (
                  <div
                    style={{
                      width: `${epic.inProgressPercent}%`,
                      backgroundColor: colors.inProgress,
                      color: "white",
                      fontSize: "0.7rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {epic.inProgressPercent}%
                  </div>
                )}
                {remaining > 0 && (
                  <div
                    style={{
                      width: `${remaining}%`,
                      backgroundColor: colors.remaining,
                      color: "white",
                      fontSize: "0.7rem",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {remaining}%
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EpicProgressWidget;
