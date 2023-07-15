import { useRouter } from "next/router";
import { EventsSearch } from "../../components/events/events-search";
import { getAllEvents } from "../../dummy-data";
import { EventList } from "./../../components/events/event-list";
export default function EventsPage() {
  const events = getAllEvents();
  const router = useRouter();
  const findEventsYear = (year, month) => {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  };
  return (
    <div>
      <EventsSearch onSearch={findEventsYear} />
      <EventList items={events} />
    </div>
  );
}
