import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";
import { Button } from "@/components/ui/button";

export function TaskModal({ open, onClose, task }: any) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Task Details</DialogTitle>
      <DialogContent>
        <p className="text-lg">{task}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}
