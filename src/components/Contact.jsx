import {
  MapPinIcon,
  MapIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import { useState } from 'react'
import { motion } from 'framer-motion'

const CITYS = [
  {
    id: 'barranquilla',
    name: 'Barranquilla',
    emails: {
      appointment: 'citas.atlantico@cadvidaips.com',
      admin: 'admin.atlantico@cadvidaips.com',
      reference: 'referencia.barranquilla@cadvidaips.com',
    },
    offices: [
      {
        name: 'Ambulatorio & Rehabilitación',
        location: 'Calle 54 #53-59',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.617603789214!2d-74.79313715945727!3d10.992208989215131!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d7a44f52691%3A0xdc5068316510b40e!2sCl.%2054%20%2353-59%2C%20Nte.%20Centro%20Historico%2C%20Barranquilla%2C%20Atl%C3%A1ntico!5e0!3m2!1ses!2sco!4v1704391765752!5m2!1ses!2sco',
        reference: undefined,
        tel: ['6054011782'],
        cel: { Generales: ['316-0263883'] },
      },
    ],
  },
  {
    id: 'cartagena',
    name: 'Cartagena',
    emails: {
      appointment: 'citas.bolivar@cadvidaips.com',
      admin: 'admin.bolivar@cadvidaips.com',
      reference: 'referencia.bolivar@cadvidaips.com',
    },
    offices: [
      {
        name: 'Ambulatorio & Consulta Externa',
        location: 'Calle  31A N80B-24, Barrio el Recreo',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.4329117057523!2d-75.4751378846406!3d10.387149569097044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef62431cbdc5211%3A0xe855cff0c7c48915!2sDg%2031A%20%2380b-24%2C%20Cartagena%2C%20Provincia%20de%20Cartagena%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1623174370187!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: {
          'Psicología y Psiquiatría': ['315-3315223'],
          Neuropsicología: ['316-0263884'],
        },
      },
    ],
  },
  {
    id: 'magangue',
    name: 'Magangué',
    emails: {
      appointment: 'citas.magangue@cadvidaips.com',
      admin: 'admin.magangue@cadvidaips.com',
      reference: 'referencia.magangue@cadvidaips.com',
    },
    offices: [
      {
        name: 'Hospitalización',
        location: 'Calle 16 #67-1237, Barrio Camilo Torres',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.524685391027!2d-74.74707417476897!3d9.235466159973372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ec797e39e6cf1%3A0x210ebd6f8b35430!2zQ2wuIDE2ICM2LTcsIE1hZ2FuZ3XDqSwgQm9sw612YXI!5e0!3m2!1ses!2sco!4v1704392108760!5m2!1ses!2sco',
        reference: 'Diagonal a la Universidad de Cartagena',
        tel: undefined,
        cel: { Generales: ['302-2399759'] },
      },
      {
        name: 'Ambulatorio & Consulta Externa',
        location: 'Cra 7 #16-09, Barrio Córdoba',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.081590312841!2d-74.75016045947497!3d9.237000690871035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ec7bd6fc77f01%3A0xd765edbe58d55e59!2zQ3JhLiA3ICMxNi05LCBNYWdhbmd1w6ksIEJvbMOtdmFy!5e0!3m2!1ses!2sco!4v1704392175112!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: { Generales: ['300-1277186'] },
      },
    ],
  },
  {
    id: 'monteria',
    name: 'Montería',
    emails: {
      appointment: 'citas.monteria@cadvidaips.com',
      admin: 'admin.monteria@cadvidaips.com',
      reference: 'referencia.monteria@cadvidaips.com',
    },
    offices: [
      {
        name: 'Ambulatorio, Consulta Externa & Hospitalización',
        location: 'Calle 17 #13-63, Barrio la Julia',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.4307157459907!2d-75.88474228521541!3d8.745481393717867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5a2f40b2f34741%3A0xe5b2fa1ce02a08f5!2sCAD%20Vida%20I.P.S%20Monteria!5e0!3m2!1ses!2sco!4v1622218630423!5m2!1ses!2sco',
        reference: 'Frente a la entrada del hotel 5',
        tel: undefined,
        cel: {
          'Consulta Externa': ['322-3782681'],
          Hospitalización: ['323-4361866', '312-6665145'],
          Ambulatorio: ['322-6440667'],
        },
      },
    ],
  },
  {
    id: 'sincelejo',
    name: 'Sincelejo',
    emails: {
      appointment: 'citas.sincelejo@cadvidaips.com',
      admin: 'admin.sincelejo@cadvidaips.com',
      reference: 'referencia.sincelejo@cadvidaips.com',
    },
    offices: [
      {
        name: 'Hospitalización',
        location: 'Cra 18 #25A - 08, Calle del Comercio, Centro',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1170.592269828799!2d-75.39498407117462!3d9.298901878040693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e59144ef4564a69%3A0xde08575da7caa0b1!2sCra.%2018%20%23%2025A-8%2C%20Sincelejo%2C%20Sucre!5e0!3m2!1ses!2sco!4v1777329286707!5m2!1ses!2sco',
        reference: 'Bajando la principal del Sandra',
        tel: undefined,
        cel: {
          'Pacientes hospitalizados (Línea 24 horas)': ['317-6394774']
        },
      },
      {
        name: 'Ambulatorio & Hospital Día',
        location: 'Cl 26 #16A - 7, Cruz de Colorado',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3937.3932315331276!2d-75.40141790825348!3d9.29838126093519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e59144e5345f04f%3A0x9ec2392568c2a596!2sCl.%2026%20%23%2016A-7%2C%20Sincelejo%2C%20Sucre!5e0!3m2!1ses!2sco!4v1777329406130!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: {
          'Trámites de consultas, citas y Hospital Día': ['315-2327876'],
          'Temas administrativos y/o calidad': ['316-4381508']
        },
      },
    ],
  },
  {
    id: 'turbaco',
    name: 'Turbaco',
    emails: {
      appointment: 'citas.bolivar@cadvidaips.com',
      admin: 'admin.bolivar@cadvidaips.com',
      reference: 'referencia.bolivar@cadvidaips.com',
    },
    offices: [
      {
        name: 'Ambulatorio & Rehabilitación',
        location: 'Cra 34 #21-117, Barrio Altamira',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.5309624680735!2d-75.42700429427363!3d10.336929568310975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIwJzEyLjkiTiA3NcKwMjUnMzQuOSJX!5e0!3m2!1ses!2sco!4v1568912361917!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: { Generales: ['315-3315223'] },
      },
      {
        name: 'Hospitalización',
        location: 'Cra 31 #6-51',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3925.0641286630116!2d-75.42278390000006!3d10.3367532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef621254f74db79%3A0x549ac33cc765a6fc!2sCra.%2031%2C%20Turbaco%2C%20Bol%C3%ADvar!5e0!3m2!1ses!2sco!4v1704392606348!5m2!1ses!2sco',
        reference: undefined,
        tel: ['6556914'],
        cel: { Generales: ['317-5020321'] },
      },
    ],
  },
]

export default function Contact({ selectedCity }) {
  const actualCity = CITYS.find((city) => city.id === selectedCity)

  const [dataIframe, setDataIframe] = useState({
    sede: actualCity.offices[0].name,
    url: actualCity.offices[0].gmap,
    isActive: actualCity.offices[0].name,
  })

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-brand-blue pt-36 pb-24 sm:pt-48 sm:pb-32 w-full rounded-b-[3rem] shadow-lg mb-16 mt-[-1px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-blue-light/30 to-brand-blue/90" />
          <div className="absolute left-0 top-0 -translate-y-12 -translate-x-1/3 transform-gpu opacity-20">
            <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-brand-green to-brand-green-light" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl font-heading"
          >
            Contacto {actualCity.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-blue-100 max-w-2xl mx-auto"
          >
            Encuentra toda la información necesaria para comunicarte con nuestra sede en {actualCity.name}.
          </motion.p>
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-gray-50/50 px-6 pb-24 lg:overflow-visible lg:px-0">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">

          {/* Map Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:-ml-12 -ml-0 lg:mt-0 md:p-12 pt-6 lg:sticky lg:top-32 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:block text-gray-900"
          >
            <div className="glass p-8 rounded-3xl shadow-sm border border-brand-blue/5">
              <span className="text-justify block text-gray-600 mb-6">
                En el mapa actual, encontrarás la dirección de la sede de{' '}
                <strong className="font-semibold text-brand-blue font-heading text-lg">
                  {dataIframe.sede}{' '}
                </strong>
                . Si quieres explorar otras ubicaciones, selecciona una a continuación.
              </span>

              <div className="flex w-full sm:flex-row flex-col items-center justify-center gap-3">
                {actualCity.offices.map((office) => (
                  <button
                    key={office.gmap}
                    className={`inline-flex whitespace-nowrap rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${dataIframe.isActive === office.name
                      ? 'bg-brand-blue text-white shadow-md transform scale-105'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-brand-blue/30 hover:text-brand-blue'
                      }`}
                    onClick={() =>
                      setDataIframe({
                        sede: office.name,
                        url: office.gmap,
                        isActive: office.name,
                      })
                    }
                  >
                    {office.name}
                  </button>
                ))}
              </div>

              <div className="relative mt-8 rounded-2xl overflow-hidden shadow-lg border border-gray-100 bg-white/50 p-2">
                <iframe
                  src={dataIframe.url}
                  width="100%"
                  height="450px"
                  id="locations-offices"
                  style={{ display: 'block', position: 'relative' }}
                  className="rounded-xl border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa de ${dataIframe.sede}`}
                />
              </div>
            </div>
          </motion.div>

          {/* Contact Details Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:w-full lg:max-w-7xl lg:px-8 mt-12 lg:mt-0"
          >
            <div className="space-y-8">
              {actualCity.offices.map((office, idx) => (
                <div
                  key={office.gmap}
                  className="glass rounded-3xl p-8 shadow-sm border border-brand-blue/5 hover:shadow-md transition-shadow"
                >
                  <h2 className="text-2xl font-bold tracking-tight text-brand-blue sm:text-2xl font-heading flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-green/10 text-brand-green text-sm">
                      {idx + 1}
                    </span>
                    {office.name}
                  </h2>
                  <ul role="list" className="mt-8 space-y-6 text-gray-600">
                    <li className="flex gap-x-4">
                      <MapPinIcon
                        className="mt-1 h-6 w-6 flex-none text-brand-green"
                        aria-hidden="true"
                      />
                      <span className="text-justify pt-1">
                        <strong className="font-semibold text-gray-900 block mb-1">
                          Dirección
                        </strong>
                        {office.location}
                      </span>
                    </li>
                    {office.reference && (
                      <li className="flex gap-x-4">
                        <MapIcon
                          className="mt-1 h-6 w-6 flex-none text-brand-green"
                          aria-hidden="true"
                        />
                        <span className="pt-1">
                          <strong className="font-semibold text-gray-900 block mb-1">
                            Punto de referencia
                          </strong>
                          {office.reference}
                        </span>
                      </li>
                    )}
                    {office.tel && (
                      <li className="flex gap-x-4">
                        <PhoneIcon
                          className="mt-1 h-6 w-6 flex-none text-brand-green"
                          aria-hidden="true"
                        />
                        <span className="pt-1">
                          <strong className="font-semibold text-gray-900 block mb-1">
                            Teléfonos fijos
                          </strong>
                          {office.tel.join(' / ')}
                        </span>
                      </li>
                    )}
                    <li className="flex gap-x-4">
                      <DevicePhoneMobileIcon
                        className="mt-1 h-6 w-6 flex-none text-brand-green"
                        aria-hidden="true"
                      />
                      <span className="pt-1">
                        {(() => {
                          const entries = Object.entries(office.cel)
                          const isGeneralesOnly =
                            entries.length === 1 && entries[0][0] === 'Generales'
                          if (isGeneralesOnly) {
                            const nums = entries[0][1]
                            return (
                              <>
                                <strong className="font-semibold text-gray-900 block mb-1">
                                  {nums.length === 1 ? 'Celular' : 'Celulares'}
                                </strong>
                                {nums.join(' / ')}
                              </>
                            )
                          }
                          return (
                            <>
                              <strong className="font-semibold text-gray-900 block mb-2">
                                Celulares por área
                              </strong>
                              <div className="space-y-3">
                                {entries.map(([key, values]) => (
                                  <div key={key} className="bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                                    <strong className="font-medium text-brand-blue block text-sm">
                                      {key}
                                    </strong>
                                    <span className="text-gray-700">{values.join(' / ')}</span>
                                  </div>
                                ))}
                              </div>
                            </>
                          )
                        })()}
                      </span>
                    </li>
                  </ul>
                </div>
              ))}

              <div className="glass rounded-3xl p-8 shadow-sm border border-brand-blue/5">
                <h2 className="text-2xl font-bold tracking-tight text-brand-blue sm:text-2xl font-heading mb-8">
                  Correos Electrónicos
                </h2>
                <ul role="list" className="space-y-6 text-gray-600">
                  <li className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                      <EnvelopeIcon
                        className="h-6 w-6 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="pt-2">
                      <strong className="font-semibold text-gray-900 block">
                        Citas
                      </strong>
                      <a href={`mailto:${actualCity.emails.appointment}`} className="text-brand-blue hover:text-brand-green transition-colors">
                        {actualCity.emails.appointment}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                      <EnvelopeIcon
                        className="h-6 w-6 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="pt-2">
                      <strong className="font-semibold text-gray-900 block">
                        Administrativo
                      </strong>
                      <a href={`mailto:${actualCity.emails.admin}`} className="text-brand-blue hover:text-brand-green transition-colors">
                        {actualCity.emails.admin}
                      </a>
                    </span>
                  </li>
                  <li className="flex gap-x-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-brand-blue/10">
                      <EnvelopeIcon
                        className="h-6 w-6 text-brand-blue"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="pt-2">
                      <strong className="font-semibold text-gray-900 block">
                        Referencia
                      </strong>
                      <a href={`mailto:${actualCity.emails.reference}`} className="text-brand-blue hover:text-brand-green transition-colors">
                        {actualCity.emails.reference}
                      </a>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
