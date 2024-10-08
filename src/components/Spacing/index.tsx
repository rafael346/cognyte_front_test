import React from 'react';
import styles from './styles.module.scss';

function Spacing({ size = 'medium' }: any) {
  return (
    <div
      className={`${styles.container}
        ${size === 'xxx-small' && styles.xxxSmall} 
        ${size === 'xx-small' && styles.xxSmall} 
        ${size === 'x-small' && styles.xSmall} 
        ${size === 'small' && styles.small} 
        ${size === 'medium' && styles.medium} 
        ${size === 'large' && styles.large} 
        ${size === 'x-large' && styles.xLarge} 
        ${size === 'xx-large' && styles.xxLarge} 
        ${size === 'xxx-large' && styles.xxxLarge} 
        `}
    />
  );
}

export default Spacing;
