import React from 'react';
import { BsXLg } from 'react-icons/bs';
import styles from './styles.module.scss';
import Spacing from '../Spacing';
import Title from '../Title';

import Description from '../Description';

function Modal({
  isOpen = false,
  width = '500px',
  height,
  image,
  title,
  description,
  children,
  onClickClose
}: any) {
  return (
    isOpen && (
      <div className={styles.container} onClick={onClickClose}>
        <div
          className={styles.modal}
          style={{ width: width && width, height: height && height }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            {image && <img src={image} alt={title} className={styles.image} />}
            <Spacing size="large" />
            <Title bolder={true} appearance="primary">
              {title}
            </Title>
            <Spacing size="xx-small" />
            <div className={styles.description}>
              <Description>{description}</Description>
            </div>
            <BsXLg className={styles.close} onClick={onClickClose} />
          </div>
          <Spacing size="large" />
          <div className={styles.body}>{children}</div>
        </div>
      </div>
    )
  );
}

export default Modal;
