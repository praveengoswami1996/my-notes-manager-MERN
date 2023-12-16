import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  primary?: boolean;
  secondary?: boolean;
  success?: boolean;
  warning?: boolean;
  danger?: boolean;
  outline?: boolean;
  rounded?: boolean;
}

const checkVariationValue = ({ primary, secondary, success, warning, danger }: ButtonProps): string | null => {
  const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);

  if (count > 1) {
    return 'Only one of primary, secondary, success, warning, danger can be true';
  }

  return null;
};

const CtaButton: React.FC<ButtonProps> = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  className,
  ...rest
}) => {
  const classes = twMerge(classNames(
    'flex-none flex items-center justify-center px-8 py-3 border rounded-xl font-semibold',
    {
      'border-primary bg-primary text-white': primary,
      'border-green-500 bg-green-500 text-white': success,
      'border-yellow-400 bg-yellow-400 text-white': warning,
      'border-red-500 bg-red-500 text-white': danger,
      'rounded-full': rounded,
      'bg-white border-2': outline,
      'text-primary': outline && primary,
      'text-gray-900': outline && secondary,
      'text-green-500': outline && success,
      'text-yellow-400': outline && warning,
      'text-red-500': outline && danger,
    }
  ), className);

  const variationError = checkVariationValue({
    primary,
    secondary,
    success,
    warning,
    danger,
  });

  if (variationError) {
    console.log(variationError);
  }

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default CtaButton;
