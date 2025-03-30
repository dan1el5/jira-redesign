import Widget from "./Widget"
import "./WidgetGrid.css";
import { useState } from "react";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";
import { restrictToParentElement } from "@dnd-kit/modifiers";

import StatusOverviewWidget from "./StatusOverviewWidget"; // ✅ Import the new widget
import TypesOfWorkWidget from "./TypesOfWorkWidget";
import PriorityBreakdownWidget from "./PriorityBreakdownWidget";
import EpicProgressWidget from "./EpicProgressWidget";
import TeamWorkloadWidget from "./TeamWorkloadWidget";
import RecentActivityWidget from "./RecentActivityWidget";

type WidgetData = {
  id: string;
  title?: string;
  content?: string;
  component?: React.ReactNode;
};

const initialWidgets: WidgetData[] = [
  { id: "status", component: <StatusOverviewWidget /> }, // ✅ New hard-coded JSX widget
  { id: "types-of-work", component: <TypesOfWorkWidget /> },
  { id: "priority-breakdown", component: <PriorityBreakdownWidget /> },
  { id: "epic-progress", component: <EpicProgressWidget /> },
  { id: "team-workload", component: <TeamWorkloadWidget /> },
  { id: "recent-activity", component: <RecentActivityWidget /> },
];

function SortableItem({ id, title, content, component }: WidgetData) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {component ? component : <Widget title={title!} content={content!} />}
    </div>
  );
}

function WidgetGrid() {
  const [widgets, setWidgets] = useState(initialWidgets);

  const sensors = useSensors(useSensor(PointerSensor));

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = widgets.findIndex((w) => w.id === active.id);
      const newIndex = widgets.findIndex((w) => w.id === over?.id);
      setWidgets(arrayMove(widgets, oldIndex, newIndex));
    }
  };

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
      modifiers={[restrictToParentElement]}
    >
      <SortableContext
        items={widgets.map((w) => w.id)}
        strategy={verticalListSortingStrategy}
      >
        <div className="widget-grid">
          {widgets.map((w) => (
            <SortableItem key={w.id} {...w} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default WidgetGrid;
