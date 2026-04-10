import { ReactNode } from "react";

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  right,
}: {
  id: string;
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-28 py-14 sm:py-20">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="max-w-2xl">
          {eyebrow ? (
            <p className="eyebrow text-xs sm:text-sm">{eyebrow}</p>
          ) : null}
          <h2 className="section-heading mt-3 font-semibold text-white">
            {title}
          </h2>
          {description ? (
            <p className="muted mt-4 max-w-xl text-sm leading-7 sm:text-base">
              {description}
            </p>
          ) : null}
        </div>
        {right}
      </div>
      <div className="mt-8">{children}</div>
    </section>
  );
}
