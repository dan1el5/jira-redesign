import React, { useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TaskModal } from "./task-modal";
import "@fontsource/coming-soon";

export function Draggable({ task, columnId }: any) {
  const { id, priority } = task;

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const [open, setOpen] = useState(false);

  const isDone = columnId === "done";

  const isOverlay = columnId === "overlay";
  const wrapperProps = isOverlay
    ? {}
    : {
        ...listeners,
        ...attributes,
      };

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <>
      <div
        ref={setNodeRef}
        style={style}
        className={`p-3 rounded-md hover:bg-yellow-200 transition cursor-pointer rotate-[0.5deg] shadow-md ${
          isDone ? "bg-gray-300 opacity-50" : "bg-yellow-100"
        }`}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="cursor-pointer flex justify-between items-center"
        >
          <span className="flex items-center gap-2">
            <span className="font-['Coming_Soon'] text-gray-800">{id}</span>
            <span
              className={`w-2 h-2 rounded-full ${
                priority === "high"
                  ? "bg-red-500"
                  : priority === "medium"
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
              title={`Priority: ${priority}`}
            />
          </span>

          {/* Drag Handle */}
          <span
            {...wrapperProps}
            onClick={(e) => e.stopPropagation()}
            className="text-gray-500 cursor-grab hover:text-gray-800 px-2"
            title="Drag"
          >
            ⠿
          </span>
        </div>
      </div>

      <TaskModal open={open} onClose={() => setOpen(false)} task={id} />
    </>
  );
}
