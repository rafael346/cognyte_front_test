import React from 'react';
import styles from './styles.module.scss';

function Spinner({ show, color = '#363272', width = '50px', height = '50px' }) {
  return (
    show && (
      <svg
        className={styles.spinner}
        viewBox="0 0 50 50"
        style={{ width: width && width, height: height && height }}
      >
        <circle
          className={styles.path}
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth="5"
          style={{ stroke: color && color }}
        />
      </svg>
    )
  );
}

export default Spinner;
