export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button type={type} data-variant={variant} {...props}>
      {children}
    </button>
  );
}
