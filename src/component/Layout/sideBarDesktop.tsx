import Link from "next/link"
import Image from "next/image"
import { useAppDispatch,useAppSelector } from "@/store/hooks"
import { setIsExpanded } from "@/store/slices/sidebarDesk"
import styles from '@/component/Layout/componentStyles/SideBarDesk.module.css'
const SideBarDesktop=()=>{

  const isExpanded=useAppSelector(state=>state.sidebarDesk.isExpanded)
   const dispatch =useAppDispatch()

    return(
    <aside className={isExpanded?styles["sbDesktop-wrapper"]:styles["sbDesktop-wrapClose"]}>
        <div className={styles["curtainWrap"]} onClick={()=>dispatch(setIsExpanded())}>
          <div className={styles["curtainImgWrap"]}>
            
            <Image className={styles["curtain"]} src={isExpanded?`/svg/curtain_close.svg`:`/svg/curtain_open.svg`} alt="close" width={24} height={24}/>
            </div>
        </div>
      <ul className={styles["sbDesktop-ul"]}>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard">Home</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/overview">Overviewd</Link></li>
        <li className={styles["sbDesktop-li"]}><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarDesktop