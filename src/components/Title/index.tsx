import React from 'react';
import styles from './styles.module.scss';

function Title({
  children,
  bolder = false,
  pointer = false,
  appearance = 'default',
  padding,
  textAlign = 'center',
  width = '100%'
}: any) {
  return (
    <h1
      className={`${styles.text} 
      ${appearance === 'default' && styles.default} 
      ${appearance === 'primary' && styles.primary} 
      ${appearance === 'complementary' && styles.complementary}
      ${appearance === 'white' && styles.white}
      `}
      style={{
        maxWidth: width && width,
        fontWeight: bolder ? 'bolder' : 'normal',
        cursor: pointer ? 'pointer' : 'default',
        padding: padding && padding,
        textAlign
      }}
    >
      {children}
    </h1>
  );
}

export default Title;
