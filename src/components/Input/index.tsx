import { forwardRef, ForwardRefRenderFunction } from 'react';
import styles from './styles.module.scss';
import lock from '../../assets/icons/input-lock-icon.svg';

type InputProps = {
  label?: string;
  position?: 'start' | 'center' | 'end';
  icon?: React.ReactNode;
  error?: boolean;
  errorMessage?: string;
  mask?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  {
    name,
    value,
    label,
    disabled,
    icon,
    width = '100%',
    position = 'start',
    error = false,
    errorMessage = 'Campo Obrigatório',
    mask,
    ...rest
  },
  ref
) => (
  <div className={styles.field} style={{ width: width && width }}>
    <div className={styles.container}>
      <input
        {...rest}
        autoComplete="off"
        disabled={disabled}
        value={value}
        className={`
            ${value && styles.labelValueOn} 
            ${styles[position]}
          `}
        // style={{ border: error && '2px solid red' }}
        ref={ref}
      />
      <label
        htmlFor={name}
        className={`${value && styles.labelValueOn} ${disabled && styles.disabled}`}
      >
        {label}
      </label>
      {icon && <div className={styles.icon}>{icon}</div>}
      {disabled && (
        <div className={styles.icon}>
          <img src={lock} alt="" />
        </div>
      )}
    </div>

    {error ? <i>{errorMessage}</i> : <i> </i>}
  </div>
);

export const Input = forwardRef(InputBase);
