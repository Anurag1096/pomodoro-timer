import Link from "next/link"
import Image from "next/image"
import {useState} from 'react'
import styles from '@/component/Layout/componentStyles/SideBarDesk.module.css'
const SideBarDesktop=()=>{

  const [isExpanded,setIsExpanded]= useState<boolean>(false)

    return(
    <aside className={isExpanded?styles["sbDesktop-wrapper"]:styles["sbDesktop-wrapClose"]}>
        <div className={styles["curtainWrap"]} onClick={()=>setIsExpanded(prev=>!prev)}>
          <div className={styles["curtainImgWrap"]}>
            
            <Image className={styles["curtain"]} src={isExpanded?`/svg/curtain_close.svg`:`/svg/curtain_open.svg`} alt="close" width={24} height={24}/>
            </div>
        </div>
      <ul className={styles["sbDesktop-ul"]}>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/overview">Overviewd</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/settings">Settings</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/users">Users</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarDesktop