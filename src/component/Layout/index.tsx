// components/DashboardLayout.tsx
import Navbar from "./NavBar";
import SideBar from "./sideBar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <SideBar/>

      {/* Main content area */}
      <div className="flex flex-col flex-1">
        <Navbar />
        <main className="p-4 overflow-y-auto flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}