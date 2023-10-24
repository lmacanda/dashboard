import styles from "./styles.module.scss";
import Image from "next/image";
import green from "../../../public/icons/green.svg";
import blue from "../../../public/icons/blue.svg";
import red from "../../../public/icons/red.svg";
import driver3 from "../../../public/images/driver3.jpeg";
import driver2 from "../../../public/images/driver2.jpeg";
import driver1 from "../../../public/images/driver1.jpeg";

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
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver3.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Alex Noman{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={green} alt="green" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* second row */}
          <tr>
            <td>02</td>
            <td>5665</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver1.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Razib Rahman{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  {" "}
                  <Image src={blue} alt="green" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* third row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
          {/* row */}
          <tr>
            <td>03</td>
            <td>1755</td>
            <td>
              <div className={styles.rental_table_driver}>
                <div
                  className={styles.rental_table_driver_image}
                  style={{
                    // use the src property of the image object
                    backgroundImage: `url(${driver2.src})`,
                    // other styles
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                ></div>
                <div className={styles.rental_table_driver_name}>
                  Luke Norton{" "}
                </div>
              </div>
            </td>
            <td>
              <div className={styles.rental_table_status}>
                <div>
                  <Image src={red} alt="red" width={20} height={20} />
                </div>
                <div>Completed</div>
              </div>
            </td>
            <td>$35.44</td>
            <td>
              <button className={styles.rental_table_btn}>Details</button>
            </td>
          </tr>
          {/* row */}
        </tbody>
      </table>
    </div>
  );
}
