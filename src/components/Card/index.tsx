import React from 'react';
import styles from './styles.module.scss';

function Card({
  appearance = 'default',
  width = 'auto',
  padding = '24px',
  textAlign = 'center',
  children
}: any) {
  return (
    <div
      className={`${styles.container} 
        ${appearance === 'default' && styles.default} 
        ${appearance === 'primary' && styles.primary} 
        ${appearance === 'complementary' && styles.complementary}
        ${appearance === 'ghost' && styles.ghost}
        ${appearance === 'success' && styles.success}
        ${appearance === 'green' && styles.green}
        ${appearance === 'warning' && styles.warning}
        ${appearance === 'error' && styles.error}
        ${appearance === 'card' && styles.card}
        ${appearance === 'fadedPrimary' && styles.fadedPrimary}
        ${appearance === 'fadedGrey' && styles.fadedGrey}
        `}
      style={{
        width: width && width,
        padding: padding && padding,
        textAlign: textAlign && textAlign
      }}
    >
      {children}
    </div>
  );
}

export default Card;
