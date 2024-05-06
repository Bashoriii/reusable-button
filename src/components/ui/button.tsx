import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

import { Bookmark } from 'lucide-react';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-base font-semibold shadow hover:shadow-lg',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/95',
        secondary: 'bg-biru text-primary-foreground hover:bg-biru/90',
        destructive:
          'bg-merah text-destructive-foreground hover:bg-destructive/90',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-7 rounded-md px-3 text-sm',
        lg: 'h-11 rounded-md px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

interface IconProps {
  Icon: React.ElementType;
  iconPlacement: 'left' | 'right';
}

interface IconRefProps {
  Icon?: never;
  iconPlacement?: undefined;
}

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  Icon?: string;
  Size?: number;
  iconPlacement?: string;
}

export type ButtonIconProps = IconProps | IconRefProps;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      Icon,
      Size,
      iconPlacement,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && iconPlacement === 'left' && Size && (
          <Bookmark className="mr-2" name={Icon} size={Size} />
        )}
        {props.children}
        {Icon && iconPlacement === 'right' && Size && (
          <Bookmark className="ml-2" name={Icon} size={Size} />
        )}
      </Comp>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };
