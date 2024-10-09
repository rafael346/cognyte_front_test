import React, { useState } from 'react';
import Title from '../../components/Title';

import EventCard from './components/EventCard';
import { useEventData } from '../../hooks/useEventData';
import { EventProps } from '../../types';
import NewModal from './components/NewEventModal';
import Button from '../../components/Button';

export default function Home() {
  const { eventList } = useEventData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {eventList.length === 0 ? (
        <>
          <Title>Dont have a event yet? Just click bellow and create one</Title>
          <Button text="New Event" onClick={() => setIsOpen(true)} />
        </>
      ) : (
        <></>
      )}
      <Title>Event list</Title>
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

      <NewModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
