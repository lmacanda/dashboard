import styles from "./styles.module.scss";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

interface NavbarLogoutBtnProps {
  session: any;
}

const NavbarLogoutBtn: React.FC<NavbarLogoutBtnProps> = ({ session }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ callbackUrl: "/login" });
    router.push("/login");
  };

  return (
    <Link href="/logout" className={styles.navbar_btn}>
      <button onClick={handleLogout}>Log Out</button>
    </Link>
  );
};

export default NavbarLogoutBtn;
