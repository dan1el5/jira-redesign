import KanbanBoard from "../_components/kanban/board";

export default function DashboardPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Kanban Board</h1>
      <p className="mt-4 text-gray-600">Welcome to the Kanban Board.</p>
      <KanbanBoard />
    </div>
  );
}
