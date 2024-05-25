import { ReactElement } from 'react';
import styles from './button.module.scss';

interface IButtonProps {
  children: ReactElement | string;
  classes: string;
  onTagClick: () => void;
}

export const Button = (props: IButtonProps) => {
  const { children, classes, onTagClick } = props;
  return (
    <button
      type="button"
      className={`${classes} ${styles.button}`}
      onClick={onTagClick}
    >
      {children}
    </button>
  );
};
