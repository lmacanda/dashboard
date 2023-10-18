import Link from "next/link";
import styles from "./styles.module.css";
import Image from "next/image";
import dashboard from "../../../public/icons/dashboardLogo.svg";

export default function Sidebar() {
  return (
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
      </div>
      <div className={styles.sidebar_report_link}>
        <h2>Report</h2>
        <Link href="/payment">Payment Details</Link>
        <Link href="/transaction">Transactions</Link>
        <Link href="/report">Car Report</Link>
      </div>
      <button className="logout">Logout</button>
    </div>
  );
}
