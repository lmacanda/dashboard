import Image from "next/image";
import notificationBadge from "../../../public/icons/Notification_Badge.svg";
import search from "../../../public/icons/Search.svg";
import styles from "./searchbar.module.scss";

export default function SearchBar() {
  return (
    <div className={styles.searchbar}>
      <Image src={notificationBadge} alt="notification" width={24} height={24} />
      <form className={styles.searchbar_form}>
        <div className={styles.searchbar_form_box}>
          <Image src={search} alt="search" width={24} height={24} />
          <input className={styles.searchbar_form_box_input} type="text" />
        </div>
      </form>
    </div>
  );
}
