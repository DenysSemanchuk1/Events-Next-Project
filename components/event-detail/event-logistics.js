import { AddressIcon } from "../icons/address-icon";
import { DateIcon } from "../icons/date-icon";
import { LogisticsItem } from "./logistics-item";
import styles from "./event-logistics.module.css";

export const EventLogistics = ({ date, address, image, imageAlt }) => {
  const humanReadable = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const addressText = address.replace(", ", "\n");

  return (
    <section className={styles.logistics}>
      <div className={styles.image}>
        <img src={`/${image}`} alt={imageAlt} />
      </div>
      <ul className={styles.list}>
        <LogisticsItem icon={DateIcon}>
          <time>{humanReadable}</time>
        </LogisticsItem>
        <LogisticsItem icon={AddressIcon}>
          <time>{addressText}</time>
        </LogisticsItem>
      </ul>
    </section>
  );
};
