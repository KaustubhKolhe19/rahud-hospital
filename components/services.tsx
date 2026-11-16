import {
  Activity,
  Baby,
  Crosshair,
  Eye,
  Glasses,
  type LucideIcon,
  Pill,
  ScanEye,
  Sparkles,
  Zap,
} from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Service = { icon: LucideIcon; title: string; description: string; tags?: string[]; featured?: boolean }

const services: Service[] = [
  {
    icon: Sparkles,
    title: 'Advanced Cataract Dept.',
    description: 'Stitchless, injection-less Phaco surgery with faster recovery and crystal-clear outcomes.',
    tags: ['Indian lenses', 'American lenses', 'German lenses'],
    featured: true,
  },
  {
    icon: ScanEye,
    title: 'Retina Department',
    description: 'Comprehensive diagnosis and surgical care for complex retinal conditions.',
    tags: ['OCT Scanning', 'Green Laser (Diabetic Retinopathy)', 'Vitrectomy', 'ROP Screening', 'Fundus Photo'],
    featured: true,
  },
  { icon: Activity, title: 'Glaucoma', description: 'Early detection and long-term management to protect your sight.' },
  { icon: Zap, title: 'Lasik', description: 'Spectacle-free vision with precise refractive correction.' },
  { icon: Crosshair, title: 'Squint (Cross-eye)', description: 'Corrective treatment for eye alignment in children and adults.' },
  { icon: Baby, title: 'Pediatric Eye Care', description: 'Gentle, child-friendly eye exams and treatment.' },
  { icon: Glasses, title: 'Optical', description: 'Quality frames and prescription lenses, fitted in-house.' },
  { icon: Pill, title: 'Pharmacy', description: 'All prescribed eye medicines available under one roof.' },
]

export function Services() {
  const featured = services.filter((s) => s.featured)
  const others = services.filter((s) => !s.featured)

  return (
    <section id="services" aria-labelledby="services-title" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            id="services-title"
            eyebrow="Departments & Services"
            title="Complete eye care, every specialty"
            description="From routine check-ups to advanced surgery, every service you need is available in one place."
          />
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-2">
          {featured.map((s, i) => (
            <Reveal key={s.title} as="article" delay={i * 100} className="group">
              <div className="relative h-full overflow-hidden rounded-3xl bg-deep p-8 text-deep-foreground transition-transform duration-500 hover:-translate-y-1 sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -bottom-24 -right-24 size-72 rounded-full bg-teal/25 blur-3xl transition-transform duration-700 group-hover:scale-125"
                />
                <span className="relative flex size-14 items-center justify-center rounded-2xl bg-teal/20 text-teal ring-1 ring-teal/30">
                  <s.icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="relative mt-6 font-display text-2xl font-semibold">{s.title}</h3>
                <p className="relative mt-3 max-w-md leading-relaxed text-deep-foreground/75">{s.description}</p>
                {s.tags && (
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-deep-foreground/15 bg-deep-foreground/5 px-3.5 py-1.5 text-xs font-medium text-deep-foreground/90"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((s, i) => (
            <Reveal key={s.title} as="li" delay={(i % 3) * 90} className="group">
              <div className="h-full rounded-3xl border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:shadow-[0_24px_50px_-28px_rgba(16,40,70,0.4)]">
                <span className="flex size-12 items-center justify-center rounded-xl bg-accent text-teal transition-colors duration-500 group-hover:bg-primary group-hover:text-primary-foreground">
                  <s.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              </div>
            </Reveal>
          ))}
          <Reveal as="li" delay={180}>
            <a
              href="#contact"
              className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-teal to-primary p-7 text-primary-foreground transition-transform duration-500 hover:-translate-y-1"
            >
              <Eye className="size-7" aria-hidden="true" />
              <div className="mt-8">
                <p className="font-display text-lg font-semibold">Not sure what you need?</p>
                <p className="mt-2 text-sm text-primary-foreground/85">Book a complete eye check-up today &rarr;</p>
              </div>
            </a>
          </Reveal>
        </ul>
      </div>
    </section>
  )
}
