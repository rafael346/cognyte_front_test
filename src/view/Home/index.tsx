import React from 'react';
import Title from '../../components/Title';

import EventCard from './components/EventCard';
import { useEventData } from '../../hooks/useEventData';
import { EventProps } from '../../types';

export default function Home() {
  const { eventList } = useEventData();
  return (
    <div>
      <Title>Event list</Title>
      <button>Add new event</button>
      {eventList.map((event: EventProps) => (
        <EventCard
          key={event.id}
          id={event.id}
          title={event.title}
          startDate={event.startDate}
          endDate={event.endDate}
          currency={event.currency}
          eventStatus={event.eventStatus}
        />
      ))}
    </div>
  );
}
