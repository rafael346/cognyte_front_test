import React from 'react';
import styles from './styles.module.scss';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';
import { EventProps } from '../../../../types';
import { useEventData } from '../../../../hooks/useEventData';

export default function EventCard({
  id,
  title,
  startDate,
  endDate,
  currency,
  eventStatus
}: EventProps) {
  const { handleDeleteEvent } = useEventData();
  return (
    <div className={styles.card}>
      <div>
        <p className={styles.dateHour}>{startDate}</p>
        <p className={styles.dateHour}>{endDate}</p>
      </div>

      <p className={styles.eventName}>{title}</p>
      <button className={styles.editIcon}>
        <FaEdit size={18} />
      </button>
      <button className={styles.deleteIcon} onClick={() => handleDeleteEvent(id)}>
        <FaTrash size={16} />
      </button>
    </div>
  );
}
