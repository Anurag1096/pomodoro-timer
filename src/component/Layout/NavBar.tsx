import styles from '@/component/Layout/componentStyles/NavBar.module.css'
//Basic setup for navbar.
const NavBar=()=>{
    return (<>
       <div className={styles['navbar-wrapper']}>
    <ul className={styles["navlist-wrapper"]}>
        <li className={styles["navlist-items"]}>Home</li>
        <li className={styles["navlist-items"]}>About</li>
    </ul>


       </div>
    </>)
}


export default NavBar;