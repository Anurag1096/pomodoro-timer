import Link from "next/link"
import Image from "next/image"
import { useAppDispatch,useAppSelector } from "@/store/hooks"
import { setIsOpen } from "@/store/slices/sidebarDesk"
const SideBarMobile=()=>{
const isOpen=useAppSelector(state=> state.sidebarDesk.isOpen)
const dispatch=useAppDispatch()


if(!isOpen){
  return (
    <aside>
       <Image 
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
         <aside className="w-64 bg-gray-900 text-white p-4">
            <Image
            onClick={()=>dispatch(setIsOpen())}
            src={'/svg/Close.svg'}
            alt="close"
            width={24}
            height={24}
            />
      <ul className="space-y-2">
        <li><Link href="/dashboard">Home</Link></li>
        <li><Link href="/dashboard/overview">OverviewM</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarMobile