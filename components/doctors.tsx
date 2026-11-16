import Image from 'next/image'
import { Award, BadgeCheck, GraduationCap, UserRound } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

type Doctor = {
  name: string
  role: string
  degrees: string
  photo?: string
  stats: { value: string; label: string }[]
}

const doctors: Doctor[] = [
  {
    name: 'Dr. Jainendra Rahud',
    role: 'Phacorefractive & Vitreoretinal Surgeon & Rop Specialist',
    degrees: 'MBBS, MS, FRF (Ahmedabad), FICS (U.S.A.)',
    photo: '/images/doctors/jainendra.jpg',
    stats: [
      { value: '20+', label: 'Years of experience' },
      { value: '80,000+', label: 'Cataract surgeries' },
      { value: '10,000+', label: 'Retina surgeries' },
    ],
  },
  {
    name: 'Dr. Tejaswini Rahud (More)',
    role: 'Consultant Eye & Phacorefractive Surgeon',
    degrees: 'MS, DOMS (Netra)',
    photo: '/images/doctors/tejashwini.jpg',
    stats: [
      { value: '10+', label: 'Years of experience' },
      { value: '20,000+', label: 'Cataract surgeries' },
    ],
  },
]

function DoctorPortrait({ name, photo }: { name: string; photo?: string }) {
  return (
    <div className="relative shrink-0">
      <div
        aria-hidden="true"
        className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-teal/40 via-accent to-primary/30 opacity-80 blur-md transition-opacity duration-500 group-hover:opacity-100"
      />
      <div className="relative size-36 overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-accent via-secondary to-card p-1 ring-1 ring-border shadow-xl shadow-primary/15 sm:size-40">
        <div className="relative flex size-full items-end justify-center overflow-hidden rounded-[1.5rem] bg-gradient-to-b from-secondary to-accent">
          {photo ? (
            <Image
              src={photo}
              alt={`Portrait of ${name}`}
              fill
              sizes="(min-width: 640px) 160px, 144px"
              quality={90}
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <>
              <div
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.8),transparent_70%)]"
              />
              <UserRound
                role="img"
                aria-label={`Photo of ${name} coming soon`}
                strokeWidth={1.25}
                className="relative -mb-3 size-32 text-primary/35 transition-transform duration-700 group-hover:scale-105"
              />
            </>
          )}
        </div>
      </div>
      <span className="absolute -bottom-2 -right-2 flex size-10 items-center justify-center rounded-full border-4 border-card bg-teal text-primary-foreground shadow-md">
        <BadgeCheck className="size-5" aria-hidden="true" />
        <span className="sr-only">Verified specialist</span>
      </span>
    </div>
  )
}

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
                <div className="relative flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:text-left">
                  <DoctorPortrait name={doc.name} photo={doc.photo} />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                      Rahud Eye Center
                    </p>
                    <h3 className="mt-2 text-balance font-display text-2xl font-semibold tracking-tight text-foreground">
                      {doc.name}
                    </h3>
                    <dl className="mt-4 flex flex-col gap-3 text-left">
                      <div className="flex items-start gap-2.5">
                        <Award className="mt-0.5 size-4 shrink-0 text-teal" aria-hidden="true" />
                        <div className="min-w-0">
                          <dt className="sr-only">Specialization</dt>
                          <dd className="text-pretty text-sm font-medium leading-relaxed text-teal">
                            {doc.role}
                          </dd>
                        </div>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <GraduationCap
                          className="mt-0.5 size-4 shrink-0 text-muted-foreground"
                          aria-hidden="true"
                        />
                        <div className="min-w-0">
                          <dt className="sr-only">Education</dt>
                          <dd className="text-pretty text-[0.8125rem] leading-relaxed text-muted-foreground">
                            {doc.degrees}
                          </dd>
                        </div>
                      </div>
                    </dl>
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
