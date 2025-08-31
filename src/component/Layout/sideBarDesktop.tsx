import Link from "next/link"

import styles from '@/component/Layout/componentStyles/SideBarDesk.module.css'
const SideBarDesktop=()=>{
    return(
    <aside className={styles["sbDesktop-wrapper"]}>
      <ul className={styles["sbDesktop-ul"]}>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/overview">Overviewd</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/settings">Settings</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/users">Users</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarDesktop