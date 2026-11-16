import Image from 'next/image'
import { ArrowRight, CalendarCheck, ShieldCheck, Star } from 'lucide-react'
import { site } from '@/lib/site'

const stats = [
  { value: '1,00,000+', label: 'Cataract surgeries' },
  { value: '10,000+', label: 'Retina surgeries' },
  { value: '30+ yrs', label: 'Combined experience' },
]

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_85%_10%,oklch(0.92_0.05_190/0.7),transparent),radial-gradient(40%_50%_at_0%_90%,oklch(0.95_0.03_230/0.8),transparent)]"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000">
          <p className="inline-flex items-center gap-2 rounded-full border border-teal/30 bg-accent px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-accent-foreground">
            <span className="size-1.5 rounded-full bg-teal" aria-hidden="true" />
            {site.tagline}
          </p>

          <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            See life clearly, with{' '}
            <span className="bg-gradient-to-r from-primary to-teal bg-clip-text text-transparent">
              hands you can trust.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Sangamner&apos;s superspeciality eye hospital for stitchless cataract surgery, advanced retina care,
            glaucoma, Lasik and pediatric eye care — powered by German precision optics and robotic surgery.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/25 transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <CalendarCheck className="size-4" aria-hidden="true" />
              Book Appointment
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-4 text-sm font-semibold text-foreground transition-colors hover:border-teal/50 hover:bg-secondary"
            >
              Explore Services
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-semibold text-foreground sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs leading-snug text-muted-foreground sm:text-sm">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative animate-in fade-in zoom-in-95 duration-1000">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-[0_40px_80px_-30px_rgba(16,40,70,0.45)] sm:aspect-[5/5] lg:aspect-[4/5]">
            <Image
              src="/images/hero-eye.png"
              alt="Close-up of a healthy human eye reflecting soft teal light"
              fill
              priority
              sizes="(min-width: 1024px) 45vw, 100vw"
              className="object-cover"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-deep/50 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-3 bottom-8 flex items-center gap-3 rounded-2xl border border-border/60 bg-card/95 p-4 shadow-xl backdrop-blur sm:-left-8">
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-teal">
              <ShieldCheck className="size-5" aria-hidden="true" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Stitchless & Injection-less</p>
              <p className="text-xs text-muted-foreground">Phaco cataract surgery</p>
            </div>
          </div>

          <div className="absolute -right-2 top-8 rounded-2xl border border-border/60 bg-card/95 px-4 py-3 shadow-xl backdrop-blur sm:-right-6">
            <div className="flex items-center gap-0.5 text-amber-500" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-1 text-xs font-medium text-foreground">Trusted by thousands of families</p>
          </div>
        </div>
      </div>
    </section>
  )
}
