import Image from 'next/image'
import { Bot, CircleDot, Microscope, Orbit } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'

const tech = [
  { icon: Bot, title: 'Robotic Surgery Machines', description: 'Computer-guided precision for safer, more predictable outcomes.' },
  { icon: Microscope, title: 'Zeiss Visu 160 Microscope', description: 'World-class German optics for exceptional surgical clarity.' },
  { icon: CircleDot, title: 'Corneal Topography', description: 'Detailed corneal mapping for accurate lens and Lasik planning.' },
  { icon: Orbit, title: 'Pro Orbit Phaco', description: 'Advanced phacoemulsification system for gentle cataract removal.' },
]

export function Technology() {
  return (
    <section id="technology" aria-labelledby="technology-title" className="relative overflow-hidden bg-deep py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_100%_0%,oklch(0.62_0.1_192/0.25),transparent)]"
      />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <Reveal>
          <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] ring-1 ring-deep-foreground/10">
            <Image
              src="/images/surgical-suite.png"
              alt="Modern ophthalmic operating theatre with a surgical microscope"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover transition-transform duration-[2000ms] hover:scale-105"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <SectionHeading
              id="technology-title"
              eyebrow="Advanced Technology"
              title="Precision equipment from around the world"
              description="We invest in the same technology used by leading eye hospitals globally, so you receive the safest, most accurate care close to home."
              inverted
              align="left"
            />
          </Reveal>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {tech.map((t, i) => (
              <Reveal key={t.title} as="li" delay={i * 90} className="group">
                <div className="h-full rounded-2xl border border-deep-foreground/10 bg-deep-foreground/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-teal/40 hover:bg-deep-foreground/[0.08]">
                  <t.icon className="size-6 text-teal" aria-hidden="true" />
                  <h3 className="mt-4 font-semibold text-deep-foreground">{t.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-deep-foreground/65">{t.description}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
