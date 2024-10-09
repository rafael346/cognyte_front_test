import React, { useState } from 'react';
import styles from './styles.module.scss';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { EventProps } from '../../../../types';
import { useEventData } from '../../../../hooks/useEventData';
import EditModal from '../EditEventModal';
import Description from '../../../../components/Description';

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
      <div className={styles.dateContainer}>
        <p className={styles.date}>
          {startDate.split('T')[0]} - {endDate.split('T')[0]}
        </p>
        <p className={styles.hour}>
          {startDate.split('T')[1]} - {endDate.split('T')[1]}
        </p>
      </div>
      <div className={styles.nameContainer}>
        <p className={styles.eventName}>{title}</p>
        <p className={styles.eventCurrency}>{'$' + currency}</p>
      </div>

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
