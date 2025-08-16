import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/app/utils/cn';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition-colors ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[#cba135] text-[#111827] hover:bg-[#bfa046] w-full',
        destructive: 'bg-red-600 text-white hover:bg-red-700',
        outline: 'border border-gray-400 text-gray-700 bg-white hover:bg-gray-100',
        secondary: 'bg-gray-800 text-white hover:bg-gray-700',
        ghost: 'text-gray-600 hover:bg-gray-100',
        link: 'text-[#cba135] underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-xl px-8',
        icon: 'h-10 w-10',
      },
      fullWidth: {
        true: 'w-full',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, isLoading = false, iconLeft, iconRight, fullWidth, children, ...props },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, fullWidth }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {/* Loading spinner on the left */}
        {isLoading && (
          <span className="animate-spin mr-2 h-4 w-4 border-2 border-t-transparent border-current rounded-full" />
        )}

        {/* Icon on the left */}
        {!isLoading && iconLeft && <span className="mr-2">{iconLeft}</span>}

        {/* Button content */}
        {children}

        {/* Icon on the right */}
        {iconRight && <span className="ml-2">{iconRight}</span>}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
