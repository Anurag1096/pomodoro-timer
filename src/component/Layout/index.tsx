// components/DashboardLayout.tsx
import Navbar from "./NavBar";
import SideBar from "./sideBar";
import styles from '@/component/Layout/componentStyles/Layout.module.css'
export default function DashboardLayout({name, children }: {name:string, children: React.ReactNode }) {
  return (
    <div className={styles["layout-wrapper"]}>
      {/* Sidebar */}
      <SideBar/>
      <div className={styles["layout--name"]}>{name}</div>

      {/* Main content area */}
      <div className={styles["layout-main-wrapper"]}>
        <Navbar />
        <main className={styles['layout-content']}>
          {children}
        </main>
      </div>
    </div>
  );
}