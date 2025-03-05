import Navbar from "../_components/navbar";

export default function DashboardPage() {
  return (
    <div className="flex h-screen">
      <Navbar />
      <main className="flex-1 p-6 bg-gray-100">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="mt-4 text-gray-600">
          Welcome to your Jira Redesign Dashboard.
        </p>
      </main>
    </div>
  );
}
