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
        <ul role="list" className={styles["navlist-wrapper"]}>
          <li tabIndex={0} role="listitem" className={styles["navlist-items"]}>
            Home
          </li>
          <li role="listitem" className={styles["navlist-items"]}>
            <button onClick={() => setIsOpen(true)} aria-label="Open settings">
              <Image
                src="/svg/settings.svg"
                alt="Settings"
                width={24}
                height={24}
              />
            </button>
          </li>
        </ul>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          <SettingComponent onClose={() => setIsOpen(false)} />
        </Modal>
      </div>
    </>
  );
};

export default NavBar;
