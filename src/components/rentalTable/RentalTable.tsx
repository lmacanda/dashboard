import styles from "./styles.module.scss";
import Image from "next/image";
import green from "../../../public/icons/green.svg";
import blue from "../../../public/icons/blue.svg";
import red from "../../../public/icons/red.svg";

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
              <div className={styles.rental_table_driver_image}></div>
              Driver Name
            </td>
            <td className={styles.rental_table_status}>
              <div>
                <Image src={green} alt="green" width={20} height={20} />
              </div>
              Completed
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* second row */}
          <tr>
            <td>01</td>
            <td>6465</td>
            <td>
              <div className={styles.rental_table_driver_image}></div>
              Driver Name
            </td>
            <td className={styles.rental_table_status}>
              <div>
                {" "}
                <Image src={blue} alt="green" width={20} height={20} />
              </div>
              Completed
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* third row */}
          <tr>
            <td>01</td>
            <td>6465</td>
            <td>
              <div className={styles.rental_table_driver_image}></div>
              Driver Name
            </td>
            <td className={styles.rental_table_status}>
              <div>
                <Image src={red} alt="red" width={20} height={20} />
              </div>
              Completed
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* fourth row */}
        </tbody>
      </table>
    </div>
  );
}
