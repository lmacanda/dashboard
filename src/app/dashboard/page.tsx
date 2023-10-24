import RentalTable from "@/components/RentalTable";
import SearchBar from "@/components/searchbar/SearchBar";
import RentalTable from "@/components/rentalTable/RentalTable";
import SearchBar from "@/components/SearchBar";
import Statistic from "@/components/statistic/Statistic";
import styles from "./styles.module.css";
import "normalize.css/normalize.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard_left}>
        <Statistic />
      </div>
      <div className={styles.dashboard_right}>
        <SearchBar />
        <RentalTable />
      </div>
      <Statistic />

      <RentalTable />
    </div>
  );
}
