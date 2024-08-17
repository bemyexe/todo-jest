import { ComponentProps, forwardRef } from 'react';
import clsx from 'clsx';

import './style.css';

type ButtonVariant = 'filled' | 'transparent';

interface ButtonProps extends ComponentProps<'button'> {
  variant: ButtonVariant;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx('button', variant, className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
