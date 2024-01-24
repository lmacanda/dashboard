import styles from "./styles.module.scss";
import Link from "next/link";
import NavbarLogoutBtn from "../navbarLogoutBtn/NavbarLogoutBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

interface NavbarProps {
  session: any;
}

const Navbar: React.FC<NavbarProps> = ({ session }) => {
  return (
    <div className={styles.navbar}>
      <h1 className={styles.navbar_logo}>CAR RENT</h1>
      {session?.user ? (
        <NavbarLogoutBtn session={session} />
      ) : (
        <Link href="/login" className={styles.navbar_btn}>
          <button>Log In</button>
        </Link>
      )}
    </div>
  );
};

export const getServerSideProps = async () => {
  try {
    const session = await getServerSession(authOptions);
    console.log(session);
    return {
      props: {
        session,
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};

export default Navbar;
