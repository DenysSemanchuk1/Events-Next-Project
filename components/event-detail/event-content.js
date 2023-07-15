import styles from "./event-content.module.css";
export function EventContent({ children }) {
  return <section className={styles.content}>{children}</section>;
}
