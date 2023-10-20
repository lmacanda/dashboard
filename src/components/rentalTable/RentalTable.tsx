import styles from "./styles.module.scss";

export default function RentalTable() {
  return (
    <div className={styles.rental}>
      <table>
        <thead className={styles.rental_table_head}>
          <tr>
            <th className={styles.rental_table_head_number}>No.</th>
            <th className={styles.rental_table_head_car_number}>Car No.</th>
            <th className={styles.rental_table_head_driver}>Driver</th>
            <th className={styles.rental_table_head_status}>Status</th>
            <th className={styles.rental_table_head_earning}>Earning</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* first row */}
          <tr>
            <td>01</td>
            <td>6465</td>
            <td>
              <div className="driver-image"></div>
              Driver Name
            </td>
            <td>
              <div className="status-circle green"></div>
              Completed
            </td>
            <td>$35.44</td>
            <td>
              <button className="details-button">Details</button>
            </td>
          </tr>
          {/* second row */}
        </tbody>
      </table>
    </div>
  );
}
