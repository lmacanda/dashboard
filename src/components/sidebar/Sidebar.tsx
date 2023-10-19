import Link from "next/link";
import Image from "next/image";
import dashboard from "../../../public/icons/Dashboard.svg";
import car from "../../../public/icons/Car.svg";
import booking from "../../../public/icons/Booking.svg";
import notification from "../../../public/icons/Bell.svg";
import setting from "../../../public/icons/Settings.svg";
import payment from "../../../public/icons/Payment.svg";
import transaction from "../../../public/icons/Transaction.svg";
import report from "../../../public/icons/Report.svg";
import "normalize.css/normalize.css";
import styles from "./styles.module.css";
import Image from "next/image";
import dashboard from "../../../public/icons/dashboardLogo.svg";

export default function Sidebar() {
  return (
<<<<<<< HEAD
    <div className={styles.main_menu}>
      <h1 className={styles.main_menu_title_logo}>CAR RENT</h1>
      <div className={styles.main_menu_main}>
        <ul className={styles.main_menu_main_list}>
          <li className={`${styles.menu_item} ${styles.menu_item_active}`}>
            <div className={styles.menu_item_indicator}></div>
            <Image src={dashboard} alt="dashboard" width={20} height={20} />
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li className={styles.menu_item}>
            <Image src={car} alt="car" width={20} height={20} />
            <Link href="/drivers">Drivers</Link>
          </li>
          <li className={styles.menu_item}>
            <Image src={booking} alt="booking" width={20} height={20} />
            <Link href="/bookings">Bookings</Link>
          </li>
          <li className={styles.menu_item}>
            <Image
              src={notification}
              alt="notification"
              width={20}
              height={20}
            />
            <Link href="/notifications">Notifications</Link>
          </li>
          <li className={styles.menu_item}>
            <Image src={setting} alt="settings" width={20} height={20} />
            <Link href="/settings">Settings</Link>
          </li>
        </ul>
=======
    <div className={styles.sidebar}>
      <h1>CAR RENT</h1>
      <div className={styles.sidebar_main_link}>
        <Link href="/dashboard">
          Dashboard
          <Image
            src={dashboard}
            alt="dashboard"
            width={20}
            height={20}
            style={{ backgroundColor: "black" }}
          />
        </Link>
        <Link href="/drivers">Drivers</Link>
        <Link href="/bookings">Bookings</Link>
        <Link href="/notifications">Notifications</Link>
        <Link href="/settings">Settings</Link>
>>>>>>> statistic
      </div>
      <div className={styles.main_menu_split}>
        <div className={styles.main_menu_split_line}></div>
      </div>
      <div className={styles.main_menu_report}>
        <p className={styles.main_menu_report_title}>Report</p>
        <ul className={styles.main_menu_report_list}>
          <li className={styles.menu_item}>
            <Image src={payment} alt="payment" width={20} height={20} />
            <Link href="/payment">Payment Details</Link>
          </li>
          <li className={styles.menu_item}>
            <Image src={transaction} alt="transaction" width={20} height={20} />
            <Link href="/transaction">Transactions</Link>
          </li>
          <li className={styles.menu_item}>
            <Image src={report} alt="report" width={20} height={20} />
            <Link href="/report">Car Report</Link>
          </li>
        </ul>
      </div>
      <div className={styles.main_menu_logout}>
        <button className={styles.main_menu_logout_btn}>Logout</button>
      </div>
    </div>
  );
}
