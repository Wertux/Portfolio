export interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export function Tag({ children, className }: TagProps) {
  return (
    <span role="presentation" className={className}>
      {children}
    </span>
  );
}
