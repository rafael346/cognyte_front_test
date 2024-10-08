import React from 'react';
import Title from '../../components/Title';

import EventCard from './components/EventCard';

export default function Home() {
  return (
    <div>
      <Title>Event list</Title>
      <EventCard />
    </div>
  );
}
