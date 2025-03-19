"use client";

import React, { useState } from "react";

import {
  DndContext,
  closestCorners,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  SortableContext,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";

import { Droppable } from "./droppable";
import { Draggable } from "./draggable";

const initialColumns = {
  todo: { id: "todo", title: "To Do", tasks: ["Task 1", "Task 2"] },
  inProgress: { id: "inProgress", title: "In Progress", tasks: ["Task 3"] },
  done: { id: "done", title: "Done", tasks: ["Task 4"] },
};

export default function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;

    // Find the source and destination columns
    let sourceColumnId = null;
    let targetColumnId = null;

    Object.keys(columns).forEach((columnId) => {
      if (columns[columnId].tasks.includes(activeId)) sourceColumnId = columnId;
      if (columns[columnId].tasks.includes(overId) || columnId === overId)
        targetColumnId = columnId;
    });

    if (!sourceColumnId || !targetColumnId) return;

    // Moving within the same column
    if (sourceColumnId === targetColumnId) {
      const newTasks = arrayMove(
        columns[sourceColumnId].tasks,
        columns[sourceColumnId].tasks.indexOf(activeId),
        columns[sourceColumnId].tasks.indexOf(overId)
      );

      setColumns({
        ...columns,
        [sourceColumnId]: { ...columns[sourceColumnId], tasks: newTasks },
      });
    } else {
      // Moving to a different column
      const sourceTasks = [...columns[sourceColumnId].tasks];
      const targetTasks = [...columns[targetColumnId].tasks];

      sourceTasks.splice(sourceTasks.indexOf(activeId), 1);
      targetTasks.push(activeId);

      setColumns({
        ...columns,
        [sourceColumnId]: { ...columns[sourceColumnId], tasks: sourceTasks },
        [targetColumnId]: { ...columns[targetColumnId], tasks: targetTasks },
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-center items-start min-h-screen p-8 bg-gray-50">
        <div className="flex gap-4 p-4 bg-white shadow-lg rounded-lg">
          <SortableContext
            items={Object.keys(columns)}
            strategy={horizontalListSortingStrategy}
          >
            {Object.values(columns).map((column) => (
              <Droppable key={column.id} id={column.id} title={column.title}>
                <SortableContext
                  items={column.tasks}
                  strategy={verticalListSortingStrategy}
                >
                  {column.tasks.map((task) => (
                    <Draggable key={task} id={task} />
                  ))}
                </SortableContext>
              </Droppable>
            ))}
          </SortableContext>
        </div>
      </div>
    </DndContext>
  );
}
