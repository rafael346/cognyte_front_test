import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './styles.module.scss';

type Option = {
  title: string;
  value: number;
};

type SelectProps = {
  label?: string;
  width?: string;
  appearance?: 'default' | 'primary' | 'complementary';
  value: string;
  data: Option[];
  onClick: (option: Option) => void;
  error?: boolean;
  errorMessage?: string;
};

function Select({
  label,
  width = '100%',
  appearance = 'default',
  value,
  data,
  onClick,
  error = false,
  errorMessage = 'Campo Obrigatório'
}: SelectProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`
        ${styles.container} 
        ${styles[appearance]}
      `}
      style={{ width: width && width }}
      onMouseLeave={() => setOpen(false)}
    >
      <div
        className={styles.field}
        onClick={() => {
          setOpen(true);
        }}
        style={{ border: error ? '2px solid red' : '' }}
      >
        <p className={` ${styles.label} ${value ? styles.labelValueOn : ''}`}>{label}</p>
        <p className={styles.value}>{value}</p>
        <div className={styles.icon}>
          <FaChevronDown />
        </div>
      </div>
      {error ? <i>{errorMessage}</i> : <i> </i>}

      {open && (
        <div className={styles.options}>
          {data.map((option, key) => (
            <div
              className={styles.option}
              key={key}
              onClick={() => {
                setOpen(false);
                onClick(option);
              }}
            >
              {option.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Select;
