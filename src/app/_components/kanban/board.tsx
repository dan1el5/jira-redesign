"use client";

import React, { useState, useEffect } from "react";

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

import { DragOverlay } from "@dnd-kit/core";
import { Draggable } from "./draggable";

const initialColumns = {
  backlog: {
    id: "backlog",
    title: "Backlog",
    tasks: [
      { id: "Task 0", priority: "low" },
      { id: "Task 5", priority: "medium" },
      { id: "Task 7", priority: "medium" },
      { id: "Task 15", priority: "high" },
    ],
  },
  todo: {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "Task 1", priority: "high" },
      { id: "Task 2", priority: "medium" },
      { id: "Task 6", priority: "low" },
      { id: "Task 8", priority: "medium" },
      { id: "Task 9", priority: "high" },
      { id: "Task 13", priority: "medium" },
      { id: "Task 14", priority: "low" },
    ],
  },
  inProgress: {
    id: "inProgress",
    title: "In Progress",
    tasks: [
      { id: "Task 3", priority: "medium" },
      { id: "Task 10", priority: "high" },
      { id: "Task 12", priority: "low" },
    ],
  },
  done: {
    id: "done",
    title: "Done",
    tasks: [
      { id: "Task 4", priority: "low" },
      { id: "Task 11", priority: "medium" },
    ],
  },
};

export default function KanbanBoard({
  addTaskRef,
}: {
  addTaskRef: React.MutableRefObject<
    ((task: any, columnId: string) => void) | undefined
  >;
}) {
  const [columns, setColumns] = useState(initialColumns);
  const [activeTask, setActiveTask] = useState<any>(null);

  useEffect(() => {
    addTaskRef.current = (task, columnId) => {
      setColumns((prev) => ({
        ...prev,
        [columnId]: {
          ...prev[columnId],
          tasks: [...prev[columnId].tasks, task],
        },
      }));
    };
  }, []);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (event: any) => {
    const { active } = event;

    const activeId = active.id;

    for (const column of Object.values(columns)) {
      const match = column.tasks.find((task) => task.id === activeId);
      if (match) {
        setActiveTask(match);
        break;
      }
    }
  };

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const activeId = active.id;
    const overId = over.id;

    let sourceColumnId: string | null = null;
    let targetColumnId: string | null = null;

    Object.entries(columns).forEach(([columnId, column]) => {
      if (column.tasks.some((task) => task.id === activeId)) {
        sourceColumnId = columnId;
      }
      if (column.tasks.some((task) => task.id === overId)) {
        targetColumnId = columnId;
      }
    });

    if (!sourceColumnId || !targetColumnId) return;

    if (sourceColumnId === targetColumnId) {
      const column = columns[sourceColumnId];
      const oldIndex = column.tasks.findIndex((task) => task.id === activeId);
      const newIndex = column.tasks.findIndex((task) => task.id === overId);
      const reorderedTasks = arrayMove(column.tasks, oldIndex, newIndex);

      setColumns({
        ...columns,
        [sourceColumnId]: {
          ...column,
          tasks: reorderedTasks,
        },
      });
    } else {
      const sourceTasks = [...columns[sourceColumnId].tasks];
      const targetTasks = [...columns[targetColumnId].tasks];

      const movingTaskIndex = sourceTasks.findIndex((t) => t.id === activeId);
      if (movingTaskIndex === -1) return;

      const [movingTask] = sourceTasks.splice(movingTaskIndex, 1);

      const overIndex = targetTasks.findIndex((t) => t.id === overId);
      if (overIndex === -1) {
        targetTasks.push(movingTask);
      } else {
        targetTasks.splice(overIndex, 0, movingTask);
      }

      setColumns({
        ...columns,
        [sourceColumnId]: {
          ...columns[sourceColumnId],
          tasks: sourceTasks,
        },
        [targetColumnId]: {
          ...columns[targetColumnId],
          tasks: targetTasks,
        },
      });
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      onDragStart={handleDragStart}
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
                  items={column.tasks.map((task) => task.id)}
                  strategy={verticalListSortingStrategy}
                >
                  {column.tasks.map((task) => (
                    <Draggable key={task.id} task={task} columnId={column.id} />
                  ))}
                </SortableContext>
              </Droppable>
            ))}
          </SortableContext>
          <DragOverlay>
            {activeTask ? (
              <Draggable task={activeTask} columnId={"overlay"} />
            ) : null}
          </DragOverlay>
        </div>
      </div>
    </DndContext>
  );
}
