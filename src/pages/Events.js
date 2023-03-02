import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const data = useLoaderData();
  const events = data.events;

  return <EventsList events={events} />;
};

export const loader = async () => {
  const response = await fetch("http://localhost:8080/eventsss");

  if (!response.ok) {
    throw new Error({ message: "Could not fetch events." });
  } else {
    return response;
  }
};

export default EventsPage;
