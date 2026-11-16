import { CalendarCheck, Clock, MapPin, Phone } from 'lucide-react'
import { Logo } from '@/components/logo'
import { Reveal } from '@/components/reveal'
import { navLinks, site } from '@/lib/site'

export function SiteFooter() {
  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`

  return (
    <footer id="contact" aria-labelledby="contact-title">
      <section className="py-24 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-primary to-teal px-8 py-14 text-center text-primary-foreground sm:px-14">
              <div aria-hidden="true" className="absolute -left-20 -top-20 size-64 rounded-full bg-white/10 blur-2xl" />
              <h2 id="contact-title" className="relative text-balance font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Your clearer tomorrow starts with one call.
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-primary-foreground/85">
                Call us to book your appointment with our specialists. Walk-ins welcome during OPD hours.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {site.phones.map((p, i) => (
                  <a
                    key={p.href}
                    href={p.href}
                    className={
                      i === 0
                        ? 'inline-flex items-center gap-2 rounded-full bg-white px-7 py-4 text-sm font-semibold text-primary shadow-xl transition-transform hover:-translate-y-0.5'
                        : 'inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-white/10'
                    }
                  >
                    {i === 0 ? <CalendarCheck className="size-4" aria-hidden="true" /> : <Phone className="size-4" aria-hidden="true" />}
                    {i === 0 ? `Book: ${p.label}` : p.label}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="bg-deep text-deep-foreground">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1fr_1fr_1.3fr] lg:px-8">
          <div>
            <Logo inverted />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-deep-foreground/65">
              {site.name} — {site.tagline}.
            </p>
            <nav aria-label="Footer" className="mt-6">
              <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="text-deep-foreground/70 transition-colors hover:text-teal">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="space-y-8">
            <div className="flex gap-4">
              <MapPin className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold">Address</h3>
                <address className="mt-2 text-sm not-italic leading-relaxed text-deep-foreground/70">
                  {site.address.map((line) => (
                    <span key={line} className="block">{line}</span>
                  ))}
                </address>
              </div>
            </div>
            <div className="flex gap-4">
              <Clock className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold">OPD Timings</h3>
                <dl className="mt-2 space-y-1 text-sm text-deep-foreground/70">
                  {site.timings.map((t) => (
                    <div key={t.label} className="flex gap-2">
                      <dt className="w-16">{t.label}</dt>
                      <dd>{t.value}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-2 inline-block rounded-full bg-deep-foreground/10 px-3 py-1 text-xs font-medium">{site.closed}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="mt-0.5 size-5 shrink-0 text-teal" aria-hidden="true" />
              <div>
                <h3 className="text-sm font-semibold">Contact</h3>
                <ul className="mt-2 space-y-1 text-sm">
                  {site.phones.map((p) => (
                    <li key={p.href}>
                      <a href={p.href} className="text-deep-foreground/70 transition-colors hover:text-teal">{p.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl ring-1 ring-deep-foreground/10">
            <iframe
              title={`Map showing location of ${site.name}`}
              src={mapSrc}
              className="h-72 w-full grayscale-[30%] lg:h-full lg:min-h-80"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <div className="border-t border-deep-foreground/10">
          <p className="mx-auto max-w-7xl px-5 py-6 text-xs text-deep-foreground/50 lg:px-8">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
