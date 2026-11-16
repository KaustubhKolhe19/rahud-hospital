import { Award, GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const doctors = [
  {
    name: 'Dr. Jainendra Rahud',
    initials: 'JR',
    role: 'Phacorefractive & Vitreoretinal Surgeon',
    degrees: 'MBBS, MS, FRF, FICS',
    stats: [
      { value: '20+', label: 'Years of experience' },
      { value: '80,000+', label: 'Cataract surgeries' },
      { value: '10,000+', label: 'Retina surgeries' },
    ],
  },
  {
    name: 'Dr. Tejashwini Rahud (More)',
    initials: 'TR',
    role: 'Consultant Eye & Phacorefractive Surgeon',
    degrees: 'MS, DOMS',
    stats: [
      { value: '10+', label: 'Years of experience' },
      { value: '20,000+', label: 'Cataract surgeries' },
    ],
  },
]

export function Doctors() {
  return (
    <section id="doctors" aria-labelledby="doctors-title" className="bg-secondary/60 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal>
          <SectionHeading
            id="doctors-title"
            eyebrow="Our Experts"
            title="Surgeons with over a lakh successful surgeries"
            description="Experience you can see. Our specialists combine decades of surgical mastery with compassionate, personal care for every patient."
          />
        </Reveal>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {doctors.map((doc, i) => (
            <Reveal key={doc.name} as="article" delay={i * 120} className="group">
              <div className="relative h-full overflow-hidden rounded-3xl border border-border/70 bg-card p-8 shadow-[0_20px_50px_-30px_rgba(16,40,70,0.35)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_30px_70px_-30px_rgba(16,40,70,0.45)] sm:p-10">
                <div
                  aria-hidden="true"
                  className="absolute -right-16 -top-16 size-48 rounded-full bg-accent opacity-70 blur-2xl transition-opacity group-hover:opacity-100"
                />
                <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center">
                  <div
                    aria-hidden="true"
                    className="flex size-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-teal font-display text-3xl font-semibold text-primary-foreground shadow-lg shadow-primary/25"
                  >
                    {doc.initials}
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-semibold tracking-tight text-foreground">{doc.name}</h3>
                    <p className="mt-1 flex items-center gap-2 text-sm font-medium text-teal">
                      <Award className="size-4" aria-hidden="true" />
                      {doc.role}
                    </p>
                    <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="size-4" aria-hidden="true" />
                      {doc.degrees}
                    </p>
                  </div>
                </div>

                <dl className="relative mt-8 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-3">
                  {doc.stats.map((s) => (
                    <div key={s.label} className="flex flex-col-reverse rounded-2xl bg-secondary/70 p-4">
                      <dt className="mt-1 text-xs leading-snug text-muted-foreground">{s.label}</dt>
                      <dd className="font-display text-2xl font-semibold text-primary">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
