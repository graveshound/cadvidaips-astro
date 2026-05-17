import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircleIcon, HeartIcon, UsersIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Enfoque Holístico',
    description: 'Abordamos la salud mental y rehabilitación integrando aspectos emocionales, sociales y físicos para un bienestar general.',
    icon: HeartIcon,
  },
  {
    name: 'Acceso Equitativo',
    description: 'Buscamos que todos tengan acceso a servicios eliminando barreras geográficas, económicas y culturales.',
    icon: UsersIcon,
  },
  {
    name: 'Profesionales Especializados',
    description: 'Contamos con un equipo multidisciplinario altamente capacitado en salud mental y rehabilitación.',
    icon: CheckCircleIcon,
  },
  {
    name: 'Programas de Prevención',
    description: 'Implementamos iniciativas preventivas y talleres de manejo del estrés para promover la conciencia en la comunidad.',
    icon: ShieldCheckIcon,
  },
]

const testimonials = [
  {
    quote: 'Recuperé a mi hijo cuando ya no tenía esperanza. El equipo de CAD VIDA nos devolvió la tranquilidad y la unión familiar.',
    author: 'Familia R.',
    role: 'Familia de paciente',
  },
  {
    quote: 'El acompañamiento fue constante y humano. Aprendí a manejar mis emociones y hoy tengo una nueva oportunidad de vida.',
    author: 'Paciente C.',
    role: 'Tratamiento de adicciones',
  },
  {
    quote: 'Nunca imaginé que encontraría un equipo tan comprometido. Hoy llevo más de dos años en recuperación y mi familia está unida de nuevo.',
    author: 'Paciente M.',
    role: 'Paciente en recuperación',
  },
  {
    quote: 'Gracias a CAD VIDA, mi hermano recuperó su vida. El seguimiento posterior al tratamiento fue clave para evitar recaídas.',
    author: 'Familia L.',
    role: 'Familiar de paciente',
  },
  {
    quote: 'El programa de salud mental me dio las herramientas que necesitaba. El equipo entendió mi situación desde el primer día.',
    author: 'Paciente T.',
    role: 'Tratamiento de salud mental',
  },
  {
    quote: 'Fue un proceso difícil, pero el acompañamiento constante del equipo clínico y terapéutico hizo todo posible.',
    author: 'Paciente J.',
    role: 'Paciente — internamiento',
  },
]

export default function HomeClient() {
  const [tsIdx, setTsIdx] = useState(0)
  const total = testimonials.length
  const prev = () => setTsIdx(i => (i - 1 + total) % total)
  const next = () => setTsIdx(i => (i + 1) % total)

  useEffect(() => {
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [tsIdx])

  const desktopSlides = [0, 1, 2].map(offset => testimonials[(tsIdx + offset) % total])

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-blue pb-32 pt-52 sm:pt-64 lg:pt-72 w-full rounded-b-[3rem] lg:rounded-b-[5rem] shadow-xl">
        <div className="absolute inset-0 z-0">
          <img
            src="/assets/images/help.png"
            alt="Fondo de ayuda"
            className="h-full w-full object-cover opacity-20 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/90 to-brand-blue/40" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white/95 backdrop-blur-md p-1 rounded-full inline-flex items-center justify-center mb-8 shadow-xl aspect-square"
          >
            <img
              src="/assets/images/logo.png"
              className="h-20 w-auto lg:h-28 drop-shadow-md"
              alt="CADVIDA IPS"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-6xl max-w-3xl drop-shadow-lg"
          >
            +14 años transformando vidas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl"
          >
            Tratamientos especializados en adicciones y salud mental, con intervención profesional y apoyo familiar desde el primer día.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 flex items-center justify-center gap-x-6"
          >
            <a
              href="/servicios"
              className="rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-brand-green-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-green transition-all hover:scale-105 duration-300"
            >
              Nuestros Servicios
            </a>
            <a href="/contacto" className="text-sm font-semibold leading-6 text-white hover:text-blue-200 transition-colors">
              Contáctanos <span aria-hidden="true">→</span>
            </a>
          </motion.div>
        </div>

        {/* Floating shapes for dynamic design */}
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-brand-green rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Trust / Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative z-20 mx-auto max-w-4xl px-6 lg:px-8 -mt-6"
      >
        <div className="bg-white/95 backdrop-blur-md rounded-2xl shadow-xl px-6 py-7 flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {[
            { icon: UsersIcon, label: 'Equipo interdisciplinario', sublabel: 'altamente calificado' },
            { icon: HeartIcon, label: 'Atención integral,', sublabel: 'humana y segura' },
            { icon: CheckCircleIcon, label: 'Programas basados', sublabel: 'en evidencia' },
          ].map(({ icon: Icon, label, sublabel }, i) => (
            <div key={i} className="flex items-center gap-3 px-4 py-2 sm:py-0 w-full sm:w-auto justify-start">
              <div className="flex-shrink-0 h-9 w-9 flex items-center justify-center rounded-xl bg-brand-blue/8 text-brand-blue">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug">{label} {sublabel}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main Content Section */}
      <div className="relative mt-6 mx-auto max-w-7xl px-6 lg:px-8 z-20">
        <div className="glass rounded-3xl p-8 lg:p-12 shadow-2xl">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-base font-semibold leading-7 text-brand-green">Atención Integral</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprometidos con la gente
            </p>
          </div>

          {/* Services Cards */}
          <div>
            <p className="text-lg font-semibold text-gray-500 mb-6">¿Cómo podemos ayudarte?</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: ShieldCheckIcon, name: 'Tratamiento de adicciones', desc: 'Programas especializados para el manejo de consumo de sustancias psicoactivas y alcohol.', color: 'from-brand-blue to-blue-400' },
                { icon: HeartIcon, name: 'Salud mental', desc: 'Atención para ansiedad, depresión y otros trastornos emocionales.', color: 'from-brand-green to-emerald-400' },
                { icon: UsersIcon, name: 'Internamiento', desc: 'Espacios seguros y estructurados para procesos de recuperación profunda.', color: 'from-violet-500 to-purple-400' },
                { icon: CheckCircleIcon, name: 'Atención ambulatoria', desc: 'Tratamientos flexibles que se adaptan a la vida diaria del paciente.', color: 'from-sky-500 to-cyan-400' },
              ].map(({ icon: Icon, name, desc, color }, i) => (
                <motion.div
                  key={name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  {/* Accent bar top */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} rounded-t-2xl`} />
                  <div className="flex items-start gap-4">
                    <div className={`flex-shrink-0 inline-flex items-center justify-center h-11 w-11 rounded-xl bg-gradient-to-br ${color} text-white shadow-md`}>
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-base font-semibold text-gray-900 group-hover:text-brand-blue transition-colors mb-1">{name}</p>
                      <p className="text-sm leading-6 text-gray-500">{desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nuestro Enfoque Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 mt-10"
      >
        <div className="rounded-3xl overflow-hidden shadow-2xl grid lg:grid-cols-2">
          {/* Left: dark panel */}
          <div className="bg-brand-blue px-8 py-12 lg:px-12 lg:py-16 flex flex-col justify-center">
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">Nuestro Enfoque</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white leading-tight mb-6">
              No solo tratamos la adicción, tratamos a la persona y su entorno
            </h2>
            <p className="text-blue-200 text-base leading-7">
              Nuestro enfoque integra lo clínico, emocional y familiar, entendiendo que la recuperación no ocurre de forma aislada.
            </p>
          </div>

          {/* Right: key points */}
          <div className="bg-white px-8 py-12 lg:px-12 lg:py-16 flex flex-col justify-center gap-6">
            {[
              { icon: HeartIcon, title: 'Enfoque integral', sub: 'Clínico, psicológico, familiar y social.' },
              { icon: CheckCircleIcon, title: 'Planes personalizados', sub: 'Cada persona es única, cada tratamiento también.' },
              { icon: UsersIcon, title: 'Acompañamiento familiar', sub: 'La familia es parte fundamental del proceso.' },
              { icon: ShieldCheckIcon, title: 'Seguimiento continuo', sub: 'Te acompañamos incluso después del tratamiento.' },
            ].map(({ icon: Icon, title, sub }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{title}</p>
                  <p className="text-gray-500 text-sm leading-6">{sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Proceso Section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-16 mb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-2">Proceso</p>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Así es nuestro proceso</h2>
        </motion.div>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Horizontal connector line — desktop only */}
          <div className="hidden lg:block absolute top-5 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-brand-blue via-brand-green to-brand-blue opacity-30" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { n: 1, title: 'Evaluación inicial', desc: 'Realizamos una valoración profesional para entender cada caso.' },
              { n: 2, title: 'Plan de tratamiento', desc: 'Diseñamos un plan personalizado según las necesidades del paciente.' },
              { n: 3, title: 'Intervención', desc: 'Aplicamos el tratamiento con acompañamiento clínico y terapéutico constante.' },
              { n: 4, title: 'Seguimiento y reintegración', desc: 'Acompañamos el proceso de reintegración y brindamos seguimiento continuo.' },
            ].map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="flex flex-col items-center text-center"
              >
                {/* Number circle — sits on top of the line */}
                <div className="relative z-10 h-10 w-10 rounded-full bg-brand-green text-white font-bold text-base shadow-lg flex items-center justify-center mb-6 ring-4 ring-white">
                  {n}
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 w-full">
                  <p className="font-bold text-gray-900 text-base mb-2">{title}</p>
                  <p className="text-sm text-gray-500 leading-6">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>


      {/* Testimonials Section */}
      <div className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-2">Testimonios</p>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Historias reales, cambios reales</h2>
          </motion.div>

          {/* Desktop: 3 cards */}
          <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
            <AnimatePresence mode="popLayout">
              {desktopSlides.map((t, i) => (
                <motion.div
                  key={`${tsIdx}-${i}`}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5"
                >
                  <p className="text-gray-700 text-sm leading-7 flex-1">
                    <span className="text-brand-green text-base font-semibold select-none">“</span>
                    {t.quote}
                    <span className="text-brand-green text-base font-semibold select-none">”</span>
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                    <div className="h-9 w-9 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {t.author[0]}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900">{t.author}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Mobile: 1 card */}
          <div className="lg:hidden mb-10 min-h-[220px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={tsIdx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col gap-5"
              >
                <p className="text-gray-700 text-sm leading-7">
                  <span className="text-brand-green text-base font-semibold select-none">“</span>
                  {testimonials[tsIdx].quote}
                  <span className="text-brand-green text-base font-semibold select-none">”</span>
                </p>
                <div className="flex items-center gap-3 pt-2 border-t border-gray-100">
                  <div className="h-9 w-9 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {testimonials[tsIdx].author[0]}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{testimonials[tsIdx].author}</p>
                    <p className="text-xs text-gray-400">{testimonials[tsIdx].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex flex-col items-center gap-4">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTsIdx(i)}
                  aria-label={`Ir al testimonio ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${i === tsIdx
                    ? 'w-6 h-2.5 bg-brand-green'
                    : 'w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                />
              ))}
            </div>
            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                aria-label="Anterior"
                className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-blue hover:text-brand-blue transition-colors shadow-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={next}
                aria-label="Siguiente"
                className="h-10 w-10 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-500 hover:border-brand-blue hover:text-brand-blue transition-colors shadow-sm"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden bg-brand-blue"
      >
        {/* Decorative blobs */}
        <div className="absolute top-[-30%] left-[-10%] w-72 h-72 bg-brand-green/20 rounded-full filter blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[-30%] right-[-10%] w-80 h-80 bg-blue-400/20 rounded-full filter blur-[100px] pointer-events-none" />

        <div className="relative z-10 mx-auto max-w-4xl px-6 lg:px-8 py-20 text-center">
          <p className="text-brand-green text-sm font-semibold tracking-widest uppercase mb-4">Da el primer paso</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            No tienes que enfrentar<br className="hidden sm:block" /> esto solo
          </h2>
          <p className="text-blue-200 text-lg leading-8 max-w-xl mx-auto mb-10">
            Dar el primer paso puede cambiarlo todo. Estamos listos para acompañarte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:gerencia@cadvidaips.com"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-green px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-brand-green-light transition-all hover:scale-105 duration-300"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Agenda tu valoración hoy
            </a>
            <a
              href="https://wa.link/t6f9nc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm font-semibold text-white hover:bg-white/20 hover:border-white/50 transition-all hover:scale-105 duration-300"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.855L.057 23.167a.75.75 0 00.916.934l5.453-1.431A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.726 9.726 0 01-4.952-1.355l-.355-.212-3.678.965.983-3.595-.231-.371A9.75 9.75 0 1112 21.75z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
          <p className="mt-8 text-blue-300 text-sm">
            ¿No sabes por dónde empezar?{' '}
            <a href="/contacto" className="text-white underline underline-offset-4 hover:text-brand-green transition-colors font-medium">
              Consulta tu sede más cercana →
            </a>
          </p>
        </div>
      </motion.div>

      {/* Image Gallery */}

      <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32 mb-20">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {['vida-1.jpg', 'vida-2.jpg', 'vida-3.jpg', 'vida-4.jpg'].map((img, i) => (
            <motion.div
              key={img}
              whileHover={{ scale: 1.05 }}
              className="relative overflow-hidden rounded-2xl shadow-lg aspect-[3/4]"
            >
              <img
                src={`/assets/images/${img}`}
                alt="Instalaciones VIDA IPS"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
