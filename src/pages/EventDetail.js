import { Suspense } from "react";
import {
  useRouteLoaderData,
  json,
  redirect,
  defer,
  Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailPage = () => {
  const { event, events } = useRouteLoaderData("event-detail");

  return (
    <>
      <Suspense
        fallback={
          <p style={{ textAlign: "center" }}>Loading event details...</p>
        }
      >
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense
        fallback={<p style={{ textAlign: "center" }}>Loading events list...</p>}
      >
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  );
};

export default EventDetailPage;

const loadEvent = async (id) => {
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event." },
      { status: 500 }
    );
  } else {
    const responseData = await response.json();
    return responseData.event;
  }
};

const loadEvents = async () => {
  const response = await fetch("http://localhost:8080/events");

  if (!response.ok) {
    throw json({ message: "Could not fetch events." }, { status: 500 });
  } else {
    const responseData = await response.json();
    return responseData.events;
  }
};

export const loader = async ({ request, params }) => {
  return defer({
    event: await loadEvent(params.eventId),
    events: loadEvents(),
  });
};

export const action = async ({ request, params }) => {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw json({ message: "Could not delete event." }, { status: 500 });
  }

  return redirect("/events");
};
