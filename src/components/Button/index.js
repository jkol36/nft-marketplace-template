import cn from 'classnames';

import styles from './Button.module.sass';
import Loader from 'components/Loader';

const Button = ({ variant = '', loading = false, disabled = false, className, children, ...rest }) => {
  const btnVariantClassName = variant ? `button-${variant}` : 'button';

  return (
    <button
      className={cn(btnVariantClassName, {[styles.disabled]: loading || disabled}, className)}
      {...rest}>
      {loading && (
        <Loader className={styles.loader} />
      )}
      {children}
    </button>
  );
};

export default Button;
