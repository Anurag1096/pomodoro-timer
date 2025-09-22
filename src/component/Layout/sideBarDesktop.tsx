"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";   
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsExpanded } from "@/store/slices/sidebarDesk";
import Tooltip from "../Tooltip";
import styles from "@/component/Layout/componentStyles/SideBarDesk.module.css";

const links = [
  { href: "/dashboard", label: "Pomodoro", icon: "/svg/pomo.svg" },
  { href: "/dashboard/stopwatch", label: "Stopwatch", icon: "/stopwatch.png" },
  
];

export default function SideBarDesktop() {
  const pathname = usePathname(); 
  const isExpanded = useAppSelector((state) => state.sidebarDesk.isExpanded);
  const dispatch = useAppDispatch();

  return (
    <aside
      className={
        isExpanded ? styles["sbDesktop-wrapper"] : styles["sbDesktop-wrapClose"]
      }
    >
      <div
        className={styles["curtainWrap"]}
        onClick={() => dispatch(setIsExpanded())}
      >
        <div className={styles["curtainImgWrap"]}>
          <Image
            className={styles["curtain"]}
            src={
              isExpanded ? `/svg/curtain_close.svg` : `/svg/curtain_open.svg`
            }
            alt="close"
            width={24}
            height={24}
          />
        </div>
      </div>

      <ul className={styles["sbDesktop-ul"]}>
        {links.map((link) => {
          const isActive = pathname === link.href; // ✅ highlight based on URL
          return (
            <li
              key={link.href}
              className={
                isExpanded ? styles["sbDesktop-li"] : styles["sbDesktop-liClose"]
              }
            >
              <Link
                href={link.href}
                className={`${styles["sbDesktop-link"]} ${
                  isActive ? styles["sbDesktop--linkActive"] : ""
                }`}
              >
                {isExpanded ? (
                  link.label
                ) : (
                  <Tooltip text={link.label}>
                    <Image
                      src={link.icon}
                      alt={link.label}
                      width={24}
                      height={24}
                    />
                  </Tooltip>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
