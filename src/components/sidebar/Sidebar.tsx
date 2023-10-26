"use client";
import { useState } from "react";
import { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import logout from "../../../public/icons/Logout.svg";
import harmBurger from "../../../public/icons/Hamburger_Menu.svg";
import close from "../../../public/icons/Close.svg";
import "normalize.css/normalize.css";
import styles from "./styles.module.css";

interface MenuItemProps {
  text: string;
  isActive: boolean;
  onClick: (text: string) => void;
}

function MenuItem({ text, isActive, onClick }: MenuItemProps) {
  return (
    console.log(text.toLowerCase()),
      <li className={`${styles.menu_item} ${isActive ? styles.menu_item_active : ''}`} onClick={() => onClick(text)}>
        <div className={`${styles.menu_item_indicator} ${isActive ? styles.menu_item_indicator_active : ''}`}></div>
        <Image src={`/icons/${text}.svg`} alt={text.toLowerCase()} width={20} height={20} />
        <Link href={`/${text.toLowerCase()}`}>{text}</Link>
      </li>
  );
}

export default function Sidebar() {

  const [activeItem, setActiveItem] = useState<string>('Dashboard');
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const menuItems: string[] = ["Dashboard", "Drivers", "Bookings", "Notifications", "Settings"];
  const reportItems: string[] = ["Payment Details", "Transactions", "Car Report"];

  const handleMenuItemClick = (item: string) => {
    setActiveItem(item);
  };

  const mainMenuStyle = {
    "--drawer-state": isDrawerOpen ? "translateX(0px)" : "translateX(-240px)",
  } as CSSProperties;

  return (
    <div className={styles.main_menu} style={mainMenuStyle}>
      <div className={styles.main_menu_drawerBtn} onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
        { isDrawerOpen ? <Image src={close} alt="close" width={50} height={50} /> : <Image src={harmBurger} alt="harmBurger" width={20} height={20} /> }
      </div>
      <h1 className={styles.main_menu_title_logo}>CAR RENT</h1>
      <div className={styles.main_menu_main}>
        <ul className={styles.main_menu_main_list}>
          {menuItems.map((item) => (
            <MenuItem
              key={item}
              text={item}
              isActive={activeItem === item}
              onClick={handleMenuItemClick}
            />
          ))}
        </ul>
      </div>
      <div className={styles.main_menu_split}>
        <div className={styles.main_menu_split_line}></div>
      </div>
      <div className={styles.main_menu_report}>
        <p className={styles.main_menu_report_title}>Report</p>
        <ul className={styles.main_menu_report_list}>
          {reportItems.map((item) => (
            <MenuItem
              key={item}
              text={item}
              isActive={activeItem === item}
              onClick={handleMenuItemClick}
            />
          ))}
        </ul>
      </div>
      <div className={styles.main_menu_logout}>
         <button className={styles.main_menu_logout_btn}><Image src={logout} alt="logout" width={20} height={20} />Logout</button>
      </div>
    </div>
  );
}
