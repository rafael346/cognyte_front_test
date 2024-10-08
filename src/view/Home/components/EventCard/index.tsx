import React from 'react';
import styles from './styles.module.scss';
import { FaTrash } from 'react-icons/fa';
import { FaEdit } from 'react-icons/fa';

export default function index() {
  return (
    <div className={styles.card}>
      <p className={styles.dateHour}>10/10/2024 - 12:30</p>
      <p className={styles.eventName}>Event Name</p>
      <button className={styles.editIcon}>
        <FaEdit size={18} />
      </button>
      <button className={styles.deleteIcon}>
        <FaTrash size={16} />
      </button>
    </div>
  );
}
