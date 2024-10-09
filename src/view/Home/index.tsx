import React, { useEffect, useState } from 'react';
import Title from '../../components/Title';

import EventCard from './components/EventCard';
import { useEventData } from '../../hooks/useEventData';
import { EventProps } from '../../types';
import NewModal from './components/NewEventModal';
import Button from '../../components/Button';
import styles from './styles.module.scss';
import Spacing from '../../components/Spacing';
import Description from '../../components/Description';
import { toast } from 'react-toastify';

export default function Home() {
  const { eventList } = useEventData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      {eventList.length === 0 ? (
        <>
          <Spacing />
          <Title>Dont have a event yet? Just click bellow and create one</Title>
          <Spacing />
          <Button text="New Event" onClick={() => setIsOpen(true)} />
        </>
      ) : (
        <>
          <Spacing />
          <Title>Event list</Title>
          <Spacing />
          <Description>
            Here is your list of events, if you want you can add, update or remove events
          </Description>
          <Spacing />
        </>
      )}

      {eventList.map((event: EventProps) => (
        <>
          <EventCard
            key={event.id}
            id={event.id}
            title={event.title}
            startDate={event.startDate}
            endDate={event.endDate}
            currency={event.currency}
            eventStatus={event.eventStatus}
          />
          <Spacing />
        </>
      ))}
      {eventList.length === 0 ? (
        ''
      ) : (
        <Button text="Add more" onClick={() => setIsOpen(true)} width="100px" />
      )}

      <NewModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
