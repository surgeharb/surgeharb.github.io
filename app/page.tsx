import { profile, projects, projectEnquiry, stack } from '@/data/portfolio';

const linkStyle = 'rounded transition hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary';

export default function Home() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded focus:bg-primary focus:px-4 focus:py-3 focus:text-primary-foreground">
        Skip to content
      </a>
      <main id="main" tabIndex={-1} className="mx-auto max-w-4xl px-6 py-16 md:py-28">
        <p className="font-mono text-sm text-primary">~/serge-harb $ whoami</p>
        <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
          {profile.name}
          <span className="block text-muted-foreground">Senior AI Platform Engineer.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          I build AI platforms and software for real businesses — from teams working with agents
          to the products their customers use.
        </p>
        <nav aria-label="Contact and profile" className="mt-10 flex flex-wrap gap-3 font-mono text-sm">
          <a href={`mailto:${profile.email}`} className="rounded bg-primary px-5 py-3 text-primary-foreground transition hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
            Get in touch <span aria-hidden="true">→</span>
          </a>
          <a href={profile.github} className={`border px-5 py-3 hover:border-primary ${linkStyle}`}>GitHub</a>
          <a href="#work" className={`border px-5 py-3 hover:border-primary ${linkStyle}`}>Selected work</a>
        </nav>

        <section aria-labelledby="preply-heading" className="mt-28">
          <h2 id="preply-heading" className="font-mono text-sm text-primary">{'// currently at Preply'}</h2>
          <div className="mt-6 border-y py-6">
            <h3 className="text-xl font-semibold">{profile.role}</h3>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              At <a href="https://preply.com" className={`underline decoration-border underline-offset-4 ${linkStyle}`}>Preply</a>,
              I help build the AI platform that lets people run and collaborate with agents,
              ship features and maintain software.
            </p>
            <ul className="mt-5 max-w-2xl list-disc space-y-3 pl-5 text-muted-foreground marker:text-primary">
              <li>Helping scale the platform across the company so more teams can work with agents.</li>
              <li>Addressing the new bottlenecks that emerge as AI adoption changes how work gets done.</li>
              <li>Building internal agents and exploring new ways for people and agents to work together.</li>
            </ul>
          </div>
        </section>

        <section id="work" aria-labelledby="work-heading" className="mt-24 scroll-mt-8">
          <h2 id="work-heading" className="font-mono text-sm text-primary">{'// selected work'}</h2>
          <div className="mt-6 divide-y border-y">
            {projects.map((project, i) => (
              <article key={project.title} className="grid gap-2 py-6 md:grid-cols-[3rem_1fr_2fr]">
                <span aria-hidden="true" className="font-mono text-muted-foreground">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <div>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {'href' in project ? (
                    <a href={project.href} aria-label={`Visit ${project.title}`} className={`inline-block py-1 font-mono text-xs text-primary ${linkStyle}`}>
                      Visit website <span aria-hidden="true">→</span>
                    </a>
                  ) : (
                    <a href={projectEnquiry(project.title)} aria-label={`Ask about ${project.title}`} className={`inline-block py-1 font-mono text-xs text-primary ${linkStyle}`}>
                      Ask about this project <span aria-hidden="true">→</span>
                    </a>
                  )}
                  {'appStore' in project && (
                    <a href={project.appStore} aria-label={`View ${project.title} on the App Store`} className={`inline-block py-1 font-mono text-xs text-primary ${linkStyle}`}>
                      App Store <span aria-hidden="true">→</span>
                    </a>
                  )}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section aria-labelledby="stack-heading" className="mt-24">
          <h2 id="stack-heading" className="font-mono text-sm text-primary">{'// stack'}</h2>
          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies I work with">
            {stack.map((technology) => (
              <li key={technology} className="rounded border bg-card px-3 py-1.5 font-mono text-sm">{technology}</li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="contact-heading" className="mt-24">
          <h2 id="contact-heading" className="font-mono text-sm text-primary">{'// work together'}</h2>
          <p className="mt-6 max-w-2xl text-xl font-semibold">Have a product to build or a workflow to improve?</p>
          <p className="mt-3 max-w-2xl text-muted-foreground">Tell me what you are working on. I can help with AI platforms, business software, mobile apps and websites.</p>
          <a href={`mailto:${profile.email}`} className={`mt-6 inline-block py-2 font-mono text-sm text-primary ${linkStyle}`}>{profile.email} <span aria-hidden="true">→</span></a>
        </section>

        <footer className="mt-28 border-t pt-8 font-mono text-xs text-muted-foreground">
          © {new Date().getFullYear()} {profile.name}
        </footer>
      </main>
    </>
  );
}
