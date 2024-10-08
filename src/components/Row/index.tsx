import React from 'react';
import styles from './styles.module.scss';

function Row({ width = '100%', position = 'centered', align = 'center', children }: any) {
  return (
    <div
      className={`
      ${styles.container} 
      ${position === 'start' && styles.start} 
      ${position === 'centered' && styles.centered} 
      ${position === 'end' && styles.end}
      ${position === 'spaceBetween' && styles.spaceBetween} 
      `}
      style={{
        width: width && width,
        alignItems: align && align
      }}
    >
      {children}
    </div>
  );
}

export default Row;
