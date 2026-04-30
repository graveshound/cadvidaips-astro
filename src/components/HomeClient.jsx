import { motion } from 'framer-motion'
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

export default function HomeClient() {
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
            className="bg-white/95 backdrop-blur-md p-6 rounded-3xl inline-block mb-8 shadow-xl"
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
            Más de 14 años transformando vidas.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl"
          >
            Somos una IPS comprometida con el cuidado de la salud mental y el bienestar de las personas y comunidades, brindando atención integral y humana.
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

      {/* Main Content Section */}
      <div className="relative -mt-20 mx-auto max-w-7xl px-6 lg:px-8 z-20">
        <div className="glass rounded-3xl p-8 lg:p-12 shadow-2xl">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-brand-green">Atención Integral</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Comprometidos con la gente
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Trabajamos intensamente en la recuperación, inclusión social y consolidación de los lazos sociales, familiares y laborales, con una sólida formación académica y calidez humanística.
            </p>
          </div>

          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 lg:gap-y-20">
              {features.map((feature, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  key={feature.name}
                  className="relative pl-16 group"
                >
                  <dt className="text-base font-semibold leading-7 text-gray-900 group-hover:text-brand-blue transition-colors">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                      <feature.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </div>

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
