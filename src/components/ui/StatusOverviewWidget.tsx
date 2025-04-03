// src/components/StatusOverviewWidget.tsx

import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import "./Widget.css";

const data = [
  { name: "To Do", value: 3, color: "#E774BB" },
  { name: "In Progress", value: 2, color: "#F18825" },
  { name: "Done", value: 1, color: "#2C84FF" },
];

function StatusOverviewWidget() {
  const total = data.reduce((sum, d) => sum + d.value, 0);

  return (
    <div className="widget">
      <h2>Status overview</h2>
      <p style={{ marginBottom: "2rem" }}>
        Get a snapshot of the status of your issues.{" "}
        <a href="#" style={{ color: "#2C84FF", fontWeight: 500 }}>View all issues</a>
      </p>

      <div style={{ display: "flex", alignItems: "center", gap: "9rem" }}>
        {/* Left: Donut Chart */}
        <div style={{ width: "50%" , height: 120, marginLeft: "2%" }}>
          <ResponsiveContainer width="130%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={40}
                outerRadius={60}
                paddingAngle={4}
                startAngle={90}
                endAngle={-270}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Right: Summary */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.95rem", marginLeft: "-8rem", width: "50%" }}>
          {data.map((item) => (
            <div key={item.name} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
              />
              <span>{item.name}: {item.value}</span>
            </div>
          ))}
          <div style={{ marginTop: "0.5rem", fontWeight: "bold" }}>
            {total} Total issues
          </div>
        </div>
      </div>
    </div> 
  );
}

export default StatusOverviewWidget;
