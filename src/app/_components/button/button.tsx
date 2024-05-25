import { ReactElement } from 'react';
import styles from './button.module.scss';

interface IButtonProps {
  children: ReactElement | string;
  isActive: boolean;
  onTagClick: () => void;
  classes?: string;
}

export const Button = (props: IButtonProps) => {
  const { children, classes = '', isActive, onTagClick } = props;
  return (
    <button
      type="button"
      className={`${styles.button} ${classes} ${isActive ? styles.active : ''}`}
      onClick={onTagClick}
    >
      {children}
    </button>
  );
};
