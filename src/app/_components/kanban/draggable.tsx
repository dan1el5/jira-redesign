import React, { useState } from "react";
import { useDraggable } from "@dnd-kit/core";
import { TaskModal } from "./task-modal";

export function Draggable({ id }: any) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id });

  const [open, setOpen] = useState(false);
  const [startPos, setStartPos] = useState<{ x: number; y: number } | null>(
    null
  );

  const style = {
    transform: transform
      ? `translate3d(${transform.x}px, ${transform.y}px, 0)`
      : undefined,
  };

  const handleMouseDown = (event: React.MouseEvent) => {
    setStartPos({ x: event.clientX, y: event.clientY });
  };

  const handleClick = (event: React.MouseEvent) => {
    if (startPos) {
      const dx = Math.abs(event.clientX - startPos.x);
      const dy = Math.abs(event.clientY - startPos.y);

      if (dx < 5 && dy < 5) {
        event.stopPropagation();
        setOpen(true);
      }
    }
  };

  return (
    <>
      <div
        ref={setNodeRef}
        {...listeners}
        {...attributes}
        style={style}
        onMouseDown={handleMouseDown}
        onClick={handleClick}
        className="p-2 bg-white shadow-md rounded-md cursor-pointer hover:bg-gray-200 transition"
      >
        {id}
      </div>

      <TaskModal open={open} onClose={() => setOpen(false)} task={id} />
    </>
  );
}
