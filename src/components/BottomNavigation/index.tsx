import Spacing from '../Spacing';
import Button from '../Button';
import styles from './styles.module.scss';

export type Props = {
  width?: string;
  labelLeft?: string;
  appearanceLeft?:
    | 'primary'
    | 'complementary'
    | 'ghost'
    | 'disabled'
    | 'success'
    | 'warning'
    | 'error';
  actionLeft?: any;
  loadingLeft?: boolean;
  labelRight?: string;
  appearanceRight?:
    | 'primary'
    | 'complementary'
    | 'ghost'
    | 'ghost-borded'
    | 'disabled'
    | 'success'
    | 'warning'
    | 'error';
  actionRight?: any;
  loadingRight?: boolean;
};

function BottomNavigation({
  width = '100%',
  labelLeft,
  appearanceLeft,
  actionLeft,
  loadingLeft,
  labelRight,
  appearanceRight,
  actionRight,
  loadingRight = false
}: Props) {
  return (
    <div className={styles.container} style={{ width }}>
      <Spacing size="medium" />
      {labelLeft && (
        <div className={styles.leftButton}>
          <Button
            width="200px"
            appearance={appearanceLeft}
            text={labelLeft}
            onClick={actionLeft}
            loading={loadingLeft}
          />
        </div>
      )}
      <Spacing size="medium" />
      {labelRight && (
        <div className={styles.rightButton}>
          <Button
            width="200px"
            appearance={appearanceRight}
            text={labelRight}
            onClick={actionRight}
            loading={loadingRight}
          />
        </div>
      )}
    </div>
  );
}

export default BottomNavigation;
