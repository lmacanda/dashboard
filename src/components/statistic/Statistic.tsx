import styles from "./styles.module.scss";

export default function Statistic() {
  return (
    <div className={styles.statistic}>
      <h2 className={styles.statistic_title}>Todays Statistics</h2>
      <p className={styles.statistic_date}>Tue, 14 Nov, 2022, 11.30 AM</p>
      <div className={styles.statistic_card}>
        {/* First Card */}
        <div className={styles.statistic_card_item}>
          <div className={styles.statistic_card_item_title}>
            <h3>Income</h3>
            <p>Today</p>
          </div>
          <div className={styles.statistic_card_item_income}>
            <h2>$ 9460.00</h2>
            <p>↓ 1,5%</p>
          </div>
          <p className={styles.statistic_card_item_compared}>
            Compared to $9940 yesterday
          </p>
          <div className={styles.statistic_card_item_info}>
            <p>Last week Income</p>
            <p>$25658.00</p>
          </div>
        </div>
        {/* Second Card */}
        <div className={styles.statistic_card_item}>
          <div className={styles.statistic_card_item_title}>
            <h3>Expences</h3>
            <p>Today</p>
          </div>
          <div className={styles.statistic_card_item_expences}>
            <h2>$ 5660.00</h2>
            <p>↓ 2,5%</p>
          </div>
          <p>Compared to $5240 yesterday</p>
          <div className={styles.statistic_card_item_info}>
            <p>Last week expences</p>
            <p>$22658.00</p>
          </div>
        </div>
        {/* Third Card */}
        <div className={styles.statistic_card_item}>
          <div className={styles.statistic_card_item_title}>
            <h3>Hire vs Cancel</h3>
            <p>Today</p>
          </div>
          <div className={styles.statistic_card_item_total}>
            <div className={styles.statistic_card_item_total_hired}>
              <div
                className={styles.statistic_card_item_total_hired_circle}
              ></div>
              <p>Total Hired</p>
              <p>54%</p>
              <span>↑</span>
            </div>
            <div className={styles.statistic_card_item_total_canceled}>
              <div
                className={styles.statistic_card_item_total_canceled_circle}
              ></div>
              <p>Total Canceled</p>
              <p>20%</p>
              <span>↑</span>
            </div>
            <div className={styles.statistic_card_item_total_pending}>
              <div
                className={styles.statistic_card_item_total_pending_circle}
              ></div>
              <p>Total Pending</p>
              <p>26%</p>
              <span>↓</span>
            </div>
          </div>
        </div>
        {/* End Card */}
      </div>
    </div>
  );
}
