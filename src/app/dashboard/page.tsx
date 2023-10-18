import RentalTable from "@/components/RentalTable";
import SearchBar from "@/components/SearchBar";
import Statistic from "@/components/Statistic";
import styles from "./styles.module.css";

import Link from "next/link";

export default function Dashboard() {
  return (
    <div className={styles.dashboard}>
      <Statistic />
      <SearchBar />
      <RentalTable />
    </div>
  );
}
