import {
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Mail,
  MapPin,
  Phone,
} from 'lucide-react'
import Container from '../components/Container'
import Reveal from '../components/Reveal'
import SectionIntro from '../components/SectionIntro'

const socialIcons = {
  Instagram: Camera,
  LinkedIn: BriefcaseBusiness,
}

function ContactSection({ contact }) {
  return (
    <section id="contacto" className="scroll-mt-32 py-16 sm:py-24 lg:py-28">
      <Container>
        <div className="glass-panel overflow-hidden rounded-[2.25rem] border hairline p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
            <Reveal className="space-y-8">
              <SectionIntro
                eyebrow={contact.eyebrow}
                title={contact.title}
                description={contact.description}
              />

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  href={contact.emailHref}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[color:var(--ink)] px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Escribir correo
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center rounded-full border hairline px-6 py-3 text-[0.78rem] font-semibold uppercase tracking-[0.24em] text-[color:var(--ink)] transition-all duration-300 hover:bg-white/60"
                >
                  Llamar
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid gap-4 sm:grid-cols-2">
                <a
                  href={contact.emailHref}
                  className="rounded-[1.6rem] border hairline bg-white/40 p-5 transition-colors duration-300 hover:bg-white/65"
                >
                  <Mail className="text-[color:var(--accent)]" size={20} />
                  <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-soft)]">
                    Correo
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink)] sm:text-base">
                    {contact.email}
                  </p>
                </a>

                <a
                  href={contact.phoneHref}
                  className="rounded-[1.6rem] border hairline bg-white/40 p-5 transition-colors duration-300 hover:bg-white/65"
                >
                  <Phone className="text-[color:var(--accent)]" size={20} />
                  <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-soft)]">
                    Teléfono
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink)] sm:text-base">
                    {contact.phone}
                  </p>
                </a>

                <div className="rounded-[1.6rem] border hairline bg-white/40 p-5">
                  <MapPin className="text-[color:var(--accent)]" size={20} />
                  <p className="mt-5 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-soft)]">
                    Ubicación
                  </p>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--ink)] sm:text-base">
                    {contact.location}
                  </p>
                </div>

                <div className="rounded-[1.6rem] border hairline bg-white/40 p-5">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[color:var(--ink-soft)]">
                    Redes
                  </p>
                  <div className="mt-5 space-y-4">
                    {contact.social.map((item) => {
                      const Icon = socialIcons[item.label]

                      return (
                        <div
                          key={item.label}
                          className="flex items-start gap-3 border-t border-[color:var(--line)] pt-4 first:border-0 first:pt-0"
                        >
                          <span className="rounded-full border hairline p-2 text-[color:var(--accent)]">
                            {Icon ? <Icon size={16} /> : null}
                          </span>
                          <div>
                            <p className="text-sm font-semibold text-[color:var(--ink)]">
                              {item.label}
                            </p>
                            <p className="mt-1 text-sm leading-6 text-[color:var(--ink-soft)]">
                              {item.value}
                            </p>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default ContactSection
