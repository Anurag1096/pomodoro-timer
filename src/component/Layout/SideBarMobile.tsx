import Link from "next/link"
import Image from "next/image"
import { useAppDispatch,useAppSelector } from "@/store/hooks"
import { setIsOpen } from "@/store/slices/sidebarDesk"
import styles from '@/component/Layout/componentStyles/SideBarMobile.module.css'
const SideBarMobile=()=>{
const isOpen=useAppSelector(state=> state.sidebarDesk.isOpen)
const dispatch=useAppDispatch()


if(!isOpen){
  return (
    <aside>
       <Image 
       className={styles["sbMobile--burger"]}
       onClick={()=>dispatch(setIsOpen())}
       src={"/svg/Burger.svg"} 
       alt="menu_icon" 
       width={24} 
       height={24}
       />  
      
    </aside>
  )
}
    return(
         <aside className={styles["sbMobile-wrapper"]}>
            <Image
            onClick={()=>dispatch(setIsOpen())}
            src={'/svg/Close.svg'}
            alt="close"
            width={24}
            height={24}
            />
      <ul className={styles["sbMobile--ul"]}>
        <li className={styles['sbMobile--li']}><Link className={styles["sbMobile--link"]} href="/dashboard">Pomodoro</Link></li>
        <li className={styles['sbMobile--li']}><Link className={styles["sbMobile--link"]} href="/dashboard/stopwatch">Stopwatch</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarMobile