// src/components/PriorityBreakdownWidget.tsx

import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell,
  } from "recharts";
  
  import "./Widget.css";
  
  const data = [
    { priority: "Highest", value: 0, color: "#F24822" },
    { priority: "High", value: 0, color: "#FF7452" },
    { priority: "Medium", value: 5, color: "#6B778C" },
    { priority: "Low", value: 0, color: "#4C9AFF" },
    { priority: "Lowest", value: 0, color: "#2684FF" },
  ];
  
  const legend = [
    { label: "Highest", color: "#F24822" },
    { label: "High", color: "#FF7452" },
    { label: "Medium", color: "#6B778C" },
    { label: "Low", color: "#4C9AFF" },
    { label: "Lowest", color: "#2684FF" },
  ];
  
  function PriorityBreakdownWidget() {
    return (
      <div className="widget" style={{ minHeight: "295px" }}>
        <h2>Priority breakdown</h2>
        <p style={{ marginBottom: "1rem" }}>
          Get a holistic view of how work is being prioritized.{" "}
          <a href="#" style={{ color: "#0052CC", fontWeight: 500 }}>
            See what your team's been focusing on
          </a>
        </p>
  
        <div style={{ width: "100%", height: 160 }}>
          <ResponsiveContainer>
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="priority" tickLine={false} axisLine={{ stroke: "#ccc" }} />
              <YAxis allowDecimals={false} axisLine={{ stroke: "#ccc" }} />
              <Tooltip />
              <Bar dataKey="value">
                {data.map((entry, index) => (
                  <Cell
                    key={`bar-${index}`}
                    fill={entry.color}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
  
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "1rem", fontSize: "0.9rem" }}>
          {legend.map((item) => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span
                style={{
                  display: "inline-block",
                  width: 10,
                  height: 10,
                  backgroundColor: item.color,
                  borderRadius: "50%",
                }}
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default PriorityBreakdownWidget;
  