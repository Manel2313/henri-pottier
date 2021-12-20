import React from 'react';

import clsx from 'clsx';
import PropTypes from 'prop-types';

import styles from './button.module.scss';

function Button({ className, children, ...props }) {
  const classNames = clsx(styles.button, className && className);
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <button className={classNames} {...props} type="button">
      {children}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  children: '',
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
