import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { EventProps } from '../../../../types';
import { useEventData } from '../../../../hooks/useEventData';
import EditModal from '../EditEventModal';

export default function EventCard({
  id,
  title,
  startDate,
  endDate,
  currency,
  eventStatus
}: EventProps) {
  const { handleDeleteEvent } = useEventData();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.dateHour}>{startDate}</p>
        <p className={styles.dateHour}>{endDate}</p>
      </div>

      <p className={styles.eventName}>{title}</p>
      <button className={styles.editIcon} onClick={() => setIsOpen(true)}>
        <FaEdit size={18} />
      </button>
      <button className={styles.deleteIcon} onClick={() => handleDeleteEvent(id)}>
        <FaTrash size={16} />
      </button>
      <EditModal
        id={id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        startHour={startDate}
        startDate={startDate}
        endHour={endDate}
        endDate={endDate}
        eventStatus={eventStatus}
        eventTitle={title}
        price={currency}
        key={id}
      />
    </div>
  );
}
