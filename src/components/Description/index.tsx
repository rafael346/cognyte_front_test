import React from 'react';
import styles from './styles.module.scss';

function Description({
  children,
  bolder = false,
  pointer = false,
  appearance = 'default',
  padding,
  textAlign = 'center',
  onClick
}: any) {
  return (
    <p
      className={`${styles.text} 
        ${appearance === 'default' && styles.default} 
        ${appearance === 'primary' && styles.primary} 
        ${appearance === 'primaryDark' && styles.primaryDark} 
        ${appearance === 'complementary' && styles.complementary}
        ${appearance === 'grey' && styles.grey}
        ${appearance === 'grey2' && styles.grey2} 
        ${appearance === 'grey3' && styles.grey3}  
        ${appearance === 'white' && styles.white}
        `}
      style={{
        fontWeight: bolder ? 'bolder' : 'normal',
        cursor: pointer ? 'pointer' : 'default',
        padding: padding && padding,
        textAlign: textAlign && textAlign
      }}
      onClick={onClick}
    >
      {children}
    </p>
  );
}

export default Description;
