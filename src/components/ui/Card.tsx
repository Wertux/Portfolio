import type { ReactNode } from "react";

export interface CardProps {
  title: string;
  thumbnail?: string;
  tags?: string[];
  href?: string;
  children?: ReactNode;
}

export function Card({ title, thumbnail, tags, href, children }: CardProps) {
  const content = (
    <article>
      {thumbnail && (
        <div aria-hidden="true">
          {/* Thumbnail image will be rendered here */}
        </div>
      )}
      <div>
        <h3>{title}</h3>
        {tags && tags.length > 0 && (
          <ul aria-label="Tags" role="list">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
        {children}
      </div>
    </article>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
