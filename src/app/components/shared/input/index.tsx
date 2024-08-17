import { ComponentProps, forwardRef, useId } from 'react';
import clsx from 'clsx';

import './style.css';

interface InputProps extends ComponentProps<'input'> {
  label?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, className, ...props }, ref) => {
    const inputId = useId();

    return (
      <div className={clsx('input-wrapper', className)}>
        {label && <label htmlFor={inputId}>{label}</label>}
        <input id={inputId} className="input" ref={ref} {...props} />
      </div>
    );
  }
);
