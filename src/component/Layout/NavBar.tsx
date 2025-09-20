import styles from "@/component/Layout/componentStyles/NavBar.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../Modal";
import SettingComponent from "../Setting";
//Basic setup for navbar.
const NavBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <div className={styles["navbar-wrapper"]}>
        <ul className={styles["navlist-wrapper"]}>
          <li className={styles["navlist-items"]}>Home</li>
          <li
            onClick={() => setIsOpen(true)}
            className={styles["navlist-items"]}
          >
            <Image
              src={"/svg/settings.svg"}
              alt="setting_icon"
              width={24}
              height={24}
            />
          </li>
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <SettingComponent  onClose={() => setIsOpen(false)}/>
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
