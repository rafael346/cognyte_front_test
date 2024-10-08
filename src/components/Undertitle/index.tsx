import React from 'react';
import styles from './styles.module.scss';

function Undertitle({ children, bolder = false, pointer = false, appearance = 'default' }: any) {
  return (
    <h2
      className={`${styles.text} 
    ${appearance === 'default' && styles.default} 
    ${appearance === 'primary' && styles.primary} 
    ${appearance === 'primary-light' && styles.primaryLight} 
    ${appearance === 'complementary' && styles.complementary}
    ${appearance === 'grey' && styles.grey} 
    ${appearance === 'grey2' && styles.grey2}
    ${appearance === 'grey3' && styles.grey3} 
    ${appearance === 'white' && styles.white} 
      `}
      style={{
        fontWeight: bolder ? 'bolder' : 'normal',
        cursor: pointer ? 'pointer' : 'default'
      }}
    >
      {children}
    </h2>
  );
}

export default Undertitle;
