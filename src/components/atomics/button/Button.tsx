import React from 'react';
import {ButtonTypes} from '@/types/components/atomics/button';
import PropTypes from 'prop-types';

function Button({
  variant,
  size,
  border,
  children,
  className,
  ...props
}: ButtonTypes.ButtonProps) {
  const variantClasses = (variant: ButtonTypes.Variant): string => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-500 hover:bg-blue-600';
      case 'success':
        return 'bg-green-500 hover:bg-green-600';
      case 'danger':
        return 'bg-red-500 hover:bg-red-600';
      case 'warning':
        return 'bg-yellow-500 hover:bg-yellow-600';
      default:
        return 'inherit';
    }
  };

  const textClasses = (variant: ButtonTypes.Variant): string => {
    switch (variant) {
      case 'inherit':
        return 'text-black';
      default:
        return 'text-white';
    }
  };

  const sizeClasses = (size: ButtonTypes.Size): string => {
    switch (size) {
      case 'small':
        return 'text-sm p-1.5';
      case 'large':
        return 'text-lg p-3';
      default:
        return 'text-base p-1.5';
    }
  };

  const classes = className
    ? `${className} ${variantClasses(variant as ButtonTypes.Variant)} ${textClasses(variant as ButtonTypes.Variant)} ${sizeClasses(size as ButtonTypes.Size)} ${border}`
    : `${variantClasses(variant as ButtonTypes.Variant)} ${textClasses(variant as ButtonTypes.Variant)} ${sizeClasses(size as ButtonTypes.Size)} ${border}`;

  return (
    <button
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf([
    'primary', 'inherit', 'danger', 'success', 'warning'
  ]),
  size: PropTypes.oneOf([
    'small', 'medium', 'large'
  ]),
  border: PropTypes.string,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  border: 'rounded-lg'
};

export default Button;
