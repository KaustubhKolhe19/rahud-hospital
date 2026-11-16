import { Doctors } from '@/components/doctors'
import { Hero } from '@/components/hero'
import { Services } from '@/components/services'
import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { Technology } from '@/components/technology'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Doctors />
        <Services />
        <Technology />
      </main>
      <SiteFooter />
    </>
  )
}
