import SearchBar from "@/components/searchbar/SearchBar";
import RentalTable from "@/components/rentalTable/RentalTable";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

import Statistic from "@/components/statistic/Statistic";
import styles from "./styles.module.scss";

const Dashboard = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
  }
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_left}>
        <h2>welcome {session?.user.username}</h2>
        <Statistic />
      </div>
      <div className={styles.dashboard_right}>
        <SearchBar />
        <RentalTable />
      </div>
    </div>
  );
};

export default Dashboard;
