import styles from "./styles.module.scss";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_logo}>CAR RENT</h1>

      <Link href="/login" className={styles.navbar_btn}>
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Navbar;
