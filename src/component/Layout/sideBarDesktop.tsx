import Link from "next/link"
const SideBarDesktop=()=>{
    return(
         <aside className="w-64 bg-gray-900 text-white p-4">
      <ul className="space-y-2">
        <li><Link href="/dashboard/overview">Overviewd</Link></li>
        <li><Link href="/dashboard/settings">Settings</Link></li>
        <li><Link href="/dashboard/users">Users</Link></li>
      </ul>
    </aside>
    )
}

export default SideBarDesktop