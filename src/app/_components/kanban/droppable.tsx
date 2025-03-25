import React from "react";
import { useDroppable } from "@dnd-kit/core";

export function Droppable({ id, title, children }: any) {
  const { setNodeRef } = useDroppable({ id });

  const isDone = id === "done";
  const isInProgress = id === "inProgress";

  const baseStyles = "w-64 p-4 rounded-lg transition-shadow";
  const doneStyles = "bg-gray-200";
  const inProgressStyles =
    "bg-indigo-100 border-2 border-indigo-400 shadow-md animate-pulse";
  const defaultStyles = "bg-gray-100";

  return (
    <div
      ref={setNodeRef}
      className={`${baseStyles} ${
        isDone ? doneStyles : isInProgress ? inProgressStyles : defaultStyles
      }`}
    >
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}
