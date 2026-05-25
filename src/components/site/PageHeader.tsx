import { type ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative pt-32 pb-12 md:pt-40 md:pb-16">
      <div className="absolute inset-0 grid-bg -z-10" />
      <div className="container-x">
        {eyebrow && (
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-balance max-w-4xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 max-w-2xl text-base md:text-lg text-muted-foreground text-pretty">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
