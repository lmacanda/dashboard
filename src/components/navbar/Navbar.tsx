import styles from "./styles.module.scss";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
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
