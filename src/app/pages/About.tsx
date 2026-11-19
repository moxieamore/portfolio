import { ArrowUpRight } from 'lucide-react'

import { education, experience, memberships, recognition, site, training } from '../../data/site'
import { Lines, Parallax, Reveal } from '../components/motion'

export function About() {
  return (
    <article className="mx-auto max-w-[1400px] px-5 pt-28 sm:px-8 sm:pt-36">
      <Lines as="h1" className="font-display text-balance text-[clamp(44px,7.5vw,112px)]" lines={['Map data processor,', 'graphic designer', 'and instructor']} />
      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-24">
        <Reveal>
          <Parallax src="/images/workspace.jpg" alt="A desk with maps and design work" className="aspect-[3/4] rounded-image" strength={6} />
          <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-[14px]">
            {site.socials.map((s) => (
              <li key={s.label}>
                <a href={s.href} className="link-draw inline-flex items-center gap-1 text-muted hover:text-fg">
                  {s.label}
                  <ArrowUpRight className="size-3.5" />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
        <div>
          <Reveal className="text-pretty text-[19px] leading-relaxed sm:text-[22px]">
            <p>
              I studied computer science at the University of Antique, started out designing for an advertising studio in Aklan, and then spent the next years on the less visible side of the work: encoding records, cleaning data and drawing enumeration areas.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="mt-8 flex flex-col gap-5 text-[17px] leading-relaxed text-muted">
            <p>
              From 2024 to 2025 I taught computer studies part-time at the University of Antique, Tario Lim Memorial Campus, alongside map processing for the Philippine Statistics Authority, admin work at Manulife Philippines and data work for private clients.
            </p>
            <p>
              The common thread is detail: names that have to match, boundaries that have to close, and output that has to be usable by someone who was not there when it was made. I work mostly in QGIS, QField and Excel, design in Photoshop and Canva, and write small systems in PHP, MySQL, Java and Python when the job needs one. I keep training in the gaps between contracts: TESDA Java NC III, Python, WordPress, business analysis and generative AI courses.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="mt-16">
            <h2 className="text-[14px] text-muted">Experience</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {experience.map((e) => (
                <li key={`${e.title}-${e.period}`} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.2} className="mt-16">
            <h2 className="text-[14px] text-muted">Education</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {education.map((e) => (
                <li key={e.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{e.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{e.title}</span>
                    <span className="block text-[14.5px] text-muted">{e.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <ul className="mt-4 flex flex-col gap-1 text-[14px] text-muted">
              {memberships.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.25} className="mt-16">
            <h2 className="text-[14px] text-muted">Recognition</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {recognition.map((r) => (
                <li key={`${r.year}-${r.title}`} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{r.year}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{r.title}</span>
                    <span className="block text-[14.5px] text-muted">{r.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.3} className="mt-16">
            <h2 className="text-[14px] text-muted">Training</h2>
            <ol className="mt-4 divide-y divide-line border-y border-line">
              {training.map((t) => (
                <li key={t.title} className="grid gap-1 py-5 sm:grid-cols-[160px_1fr]">
                  <span className="text-[14px] tabular-nums text-faint">{t.period}</span>
                  <span>
                    <span className="block text-[16px] font-medium">{t.title}</span>
                    <span className="block text-[14.5px] text-muted">{t.detail}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Reveal>

          <Reveal delay={0.35} className="mt-16 grid grid-cols-3 gap-6">
            {[
              ['8', 'years working'],
              ['7', 'organisations'],
              ['2024', 'teaching since'],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-display text-[52px] leading-none sm:text-[72px]">{value}</p>
                <p className="mt-2 text-[14px] text-muted">{label}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </article>
  )
}
