// src/components/TypesOfWorkWidget.tsx

import "./Widget.css";

const workTypes = [
  { name: "Task", percent: 60, icon: "✅", color: "#65789B" },
  { name: "Epic", percent: 40, icon: "🟣", color: "#A18BD1" },
  { name: "Subtask", percent: 0, icon: "📋", color: "#D3D6DB" },
];

function TypesOfWorkWidget() {
  return (
    <div className="widget">
      <h2>Types of work</h2>
      <p style={{ marginBottom: "1rem" }}>
        Get a breakdown of issues by their types.{" "}
        <a href="#" style={{ color: "#2C84FF", fontWeight: 500 }}>View all items</a>
      </p>

      {/* Main Content Row: Left Column (Types), Right Column (Bars) */}
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        {/* Left: Labels */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem", flex: 1 }}>
          {workTypes.map((item) => (
            <div key={item.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
              />
              <span>{item.name}</span>
            </div>
          ))}
        </div>

        {/* Right: Progress Bars */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", flex: 1 }}>
          {workTypes.map((item) => (
            <div
              key={item.name}
              style={{
                width: "100%",
                height: 12,
                backgroundColor: "#E2E4E8",
                borderRadius: 4,
                position: "relative",
              }}
            >
              {item.percent > 0 && (
                <div
                  style={{
                    backgroundColor: item.color,
                    width: `${item.percent}%`,
                    height: "100%",
                    borderRadius: 4,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.7rem",
                    color: "white",
                  }}
                >
                  {item.percent}%
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TypesOfWorkWidget;
