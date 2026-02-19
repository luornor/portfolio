import { ReactNode } from "react";

export function Section({
  id,
  title,
  children,
  right,
}: {
  id: string;
  title: string;
  children: ReactNode;
  right?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14">
      <div className="flex items-end justify-between gap-6">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {right}
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}
