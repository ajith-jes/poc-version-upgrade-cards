import React, { FC } from 'react';
import { ButtonProps } from './index.interface';
import { Loader } from '../Loader';
import styles from './button.module.scss';

/**
 * Primary UI component for user interaction
 */
export const Button: FC<ButtonProps> = (_props) => {
  const {
    type,
    onClick,
    disables,
    size,
    block,
    className = '',
    loading,
    count,
    children,
  } = _props;

  return (
    <button
      type={type}
      onClick={onClick}
      data-testid="button"
      disabled={disables}
      className={`
        ${styles.bstButton}
        ${size ? styles[`bstButton${capitalize(size)}`] : ''}
        ${block ? 'w-full' : ''}
        ${loading ? 'pointer-events-none !px-4' : ''}
        ${className}
      `}
    >
      {typeof count !== 'undefined' && (
        <span className={styles.bstButtonCount}>{count}</span>
      )}
      {loading ? (
        <span className={styles.bstButtonLoader}>
          <Loader size={20} color="#ffffff" />
          <span className={styles.bstButtonLoaderText}>loading...</span>
        </span>
      ) : (
        children
      )}
    </button>
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
