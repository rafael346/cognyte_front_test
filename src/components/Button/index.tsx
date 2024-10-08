import Spinner from '../Spinner';

import styles from './styles.module.scss';

type ButtonProps = {
  size?: 'sm' | 'md' | 'lg';
  width?: string;
  appearance?:
    | 'primary'
    | 'complementary'
    | 'ghost'
    | 'ghost-borded'
    | 'disabled'
    | 'success'
    | 'warning'
    | 'error'
    | 'hoved';
  text?: string;
  children?: any;
  iconPosition?: 'left' | 'right';
  loading?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({
  size = 'md',
  width = '300px',
  appearance = 'primary',
  text = 'I`m a button!',
  children,
  iconPosition = 'right',
  loading = false,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`
      ${styles.container} 
      ${styles[size]} 
      ${styles[appearance]}
      `}
      style={{
        width: width && width
      }}
      {...rest}
    >
      <div className={styles.text}>
        {iconPosition === 'left' ? children : ''}
        {loading && (
          <Spinner
            show={true}
            color={appearance === 'primary' ? '#fff' : '#1c66a5'}
            width="20px"
            height="20px"
          />
        )}
        <p style={{ margin: iconPosition === 'left' ? '0 0 0 10px' : '0 10px 0 0' }}>{text}</p>
        {iconPosition === 'right' ? children : ''}
      </div>
    </button>
  );
}

export default Button;
