import { EventItem } from "./event-item"
import styles from './event-list.module.css'
export const EventList = ({items}) => {
  return (
    <ul className={styles.list}>
      {
        items.map((event) => <EventItem key={event.id} {...event}/>)
      }
    </ul>
  )
}
