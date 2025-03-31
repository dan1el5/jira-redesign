"use client";

import React, { useRef, useState } from "react";
import KanbanBoard from "../_components/kanban/board";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
} from "@mui/material";
import { Button } from "@/components/ui/button";

const priorities = ["high", "medium", "low"];
const columns = ["backlog", "todo", "inProgress", "done"];

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");
  const [column, setColumn] = useState("todo");

  const addTaskRef = useRef<((task: any, columnId: string) => void) | null>(
    null
  );

  const handleSubmit = () => {
    if (!title.trim() || !addTaskRef.current) return;

    const newTask = { id: title.trim(), priority };
    addTaskRef.current(newTask, column);

    setTitle("");
    setPriority("medium");
    setColumn("todo");
    setOpen(false);
  };

  return (
    <div className="relative">
      <h1 className="text-3xl font-bold">Kanban Board</h1>
      <p className="mt-4 text-gray-600">Welcome to the Kanban Board.</p>

      <KanbanBoard addTaskRef={addTaskRef} />

      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 rounded-full px-6 py-3 shadow-lg bg-indigo-600 hover:bg-indigo-700 text-white"
      >
        + Create Task
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Create New Task</DialogTitle>
        <DialogContent className="space-y-4 mt-2">
          <TextField
            label="Task Name"
            fullWidth
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            select
            label="Priority"
            fullWidth
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            {priorities.map((p) => (
              <MenuItem key={p} value={p}>
                {p.charAt(0).toUpperCase() + p.slice(1)}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            select
            label="Section"
            fullWidth
            value={column}
            onChange={(e) => setColumn(e.target.value)}
          >
            {columns.map((col) => (
              <MenuItem key={col} value={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </MenuItem>
            ))}
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button variant="ghost" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button onClick={handleSubmit}>Create</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
