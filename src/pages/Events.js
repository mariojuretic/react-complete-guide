import { Suspense } from "react";
import { useLoaderData, json, defer, Await } from "react-router-dom";

import EventsList from "../components/EventsList";

const EventsPage = () => {
  const { events } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );
};

export default EventsPage;

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
};

export const loader = () => {
  return defer({ events: loadEvents() });
};
