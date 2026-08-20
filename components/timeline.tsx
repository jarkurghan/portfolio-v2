import type { Experience } from "@/lib/types";

export function Timeline({
  items,
  detailed = false,
}: {
  items: Experience[];
  detailed?: boolean;
}) {
  return (
    <ol className="mt-6 space-y-0">
      {items.map((job, i) => (
        <li key={job.company} className="flex gap-6">
          <div className="flex w-10 flex-col items-center">
            <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-cyan shadow-[0_0_12px_var(--cyan)]" />
            {i < items.length - 1 ? (
              <span className="w-px flex-1 bg-line" />
            ) : null}
          </div>
          <div className="pb-10">
            <p className="font-mono text-xs text-muted">{job.period}</p>
            <h3 className="mt-1 text-lg font-medium">
              {job.url ? (
                <a
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan"
                >
                  {job.company}
                </a>
              ) : (
                job.company
              )}
            </h3>
            <p className="text-sm text-violet">{job.role}</p>
            {job.place && detailed ? (
              <p className="mt-1 font-mono text-xs text-muted">{job.place}</p>
            ) : null}
            {detailed ? (
              <ul className="mt-3 max-w-2xl space-y-2 text-sm leading-7 text-muted">
                {job.points.map((point) => (
                  <li key={point} className="relative pl-5">
                    <span className="absolute left-0 top-2.5 h-1.5 w-1.5 rounded-full bg-violet" />
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 max-w-2xl text-sm text-muted">{job.points[0]}</p>
            )}
          </div>
        </li>
      ))}
    </ol>
  );
}
