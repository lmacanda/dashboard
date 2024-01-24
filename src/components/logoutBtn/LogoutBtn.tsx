"use client";
import styles from "./styles.module.scss";
import Image from "next/image";
import logout from "../../../public/icons/Logout.svg";

interface LogoutBtnProps {
  session: any;
  handleLogout: () => void;
}

const LogoutBtn: React.FC<LogoutBtnProps> = ({ session, handleLogout }) => {
  return (
    <>
      <button onClick={handleLogout} className={styles.logout_btn}>
        <Image src={logout} alt="logout" width={20} height={20} />
        Logout
      </button>
    </>
  );
};

export default LogoutBtn;
