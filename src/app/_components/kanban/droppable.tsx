import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, title, children }: any) {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="w-64 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
