import RentalTable from "@/components/RentalTable";
import SearchBar from "@/components/SearchBar";
import Statistic from "@/components/statistic/Statistic";
import styles from "./styles.module.css";
import "normalize.css/normalize.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Statistic />

      <RentalTable />
    </div>
  );
}
