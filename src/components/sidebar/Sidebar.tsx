"use client";
import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { CSSProperties } from "react";
import MenuItem from "../menuItem/MenuItem";
import Image from "next/image";
import LogoutBtn from "../logoutBtn/LogoutBtn";
import harmBurger from "../../../public/icons/Hamburger_Menu.svg";
import close from "../../../public/icons/Close.svg";
import "normalize.css/normalize.css";
import styles from "./styles.module.css";
import { signOut } from "next-auth/react";

interface SidebarProps {
  session: any;
  handleLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ session }) => {
  const router = useRouter();
  const pathname = usePathname().split("/")[1];
  console.log(pathname);

  const undoNeatPathname = pathname.split("-").join(" ");
  console.log(undoNeatPathname);

  function capitalizeWords(str: string) {
    return str
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }

  const currentActiveItem = capitalizeWords(undoNeatPathname);
  console.log(currentActiveItem);

  const [activeItem, setActiveItem] = useState<string>(currentActiveItem);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  const menuItems: string[] = [
    "Dashboard",
    "Drivers",
    "Bookings",
    "Notifications",
    "Settings",
  ];
  const reportItems: string[] = [
    "Payment Details",
    "Transactions",
    "Car Report",
  ];

  useEffect(() => {
    console.log("Updated item: " + activeItem);
  }, [activeItem]);

  function neatUrl(text: string) {
    let neatText: string = text.split(" ").join("-");
    return neatText;
  }

  const handleMenuItemClick = (item: string) => {
    console.log(item);
    setActiveItem(item);
    router.push(`/${neatUrl(item).toLocaleLowerCase()}`);
  };

  const handleLogout = async () => {
    await signOut({ callbackUrl: `${window.location.origin}/login` });
  };

  const mainMenuStyle = {
    "--drawer-state": isDrawerOpen ? "translateX(0px)" : "translateX(-240px)",
  } as CSSProperties;

  return (
    <div className={styles.main_menu} style={mainMenuStyle}>
      <div
        className={styles.main_menu_drawerBtn}
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        {isDrawerOpen ? (
          <Image src={close} alt="close" width={50} height={50} />
        ) : (
          <Image src={harmBurger} alt="harmBurger" width={20} height={20} />
        )}
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
        <LogoutBtn session={session} handleLogout={handleLogout} />
      </div>
    </div>
  );
};

export default Sidebar;
