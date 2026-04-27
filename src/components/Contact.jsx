import {
  MapPinIcon,
  MapIcon,
  PhoneIcon,
  DevicePhoneMobileIcon,
  EnvelopeIcon,
} from '@heroicons/react/20/solid'
import { useState } from 'react'

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
        name: 'Ambulatorio & Rehabilitacion',
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
          'Psicología y psiquiatría': ['315-3315223'],
          Neuropsicologia: ['302-2399759'],
        },
      },
    ],
  },
  {
    id: 'magangue',
    name: 'Magangue',
    emails: {
      appointment: 'citas.magangue@cadvidaips.com',
      admin: 'admin.magangue@cadvidaips.com',
      reference: 'referencia.magangue@cadvidaips.com',
    },
    offices: [
      {
        name: 'Hospitalizacion',
        location: 'Calle 16 #67-1237, Barrio Camilo Torres',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d984.524685391027!2d-74.74707417476897!3d9.235466159973372!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ec797e39e6cf1%3A0x210ebd6f8b35430!2zQ2wuIDE2ICM2LTcsIE1hZ2FuZ3XDqSwgQm9sw612YXI!5e0!3m2!1ses!2sco!4v1704392108760!5m2!1ses!2sco',
        reference: 'Diagonal a la Universidad de Cartagena',
        tel: undefined,
        cel: { Generales: ['302-2399759'] },
      },
      {
        name: 'Ambulatorio & Consulta Externa',
        location: 'Cra 7 #16-09, Barrio Cordoba',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.081590312841!2d-74.75016045947497!3d9.237000690871035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e5ec7bd6fc77f01%3A0xd765edbe58d55e59!2zQ3JhLiA3ICMxNi05LCBNYWdhbmd1w6ksIEJvbMOtdmFy!5e0!3m2!1ses!2sco!4v1704392175112!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: { Generales: ['300-1277186'] },
      },
    ],
  },
  {
    id: 'monteria',
    name: 'Monteria',
    emails: {
      appointment: 'citas.monteria@cadvidaips.com',
      admin: 'admin.monteria@cadvidaips.com',
      reference: 'referencia.monteria@cadvidaips.com',
    },
    offices: [
      {
        name: 'Ambulatorio, Consulta externa & Hospitalizacion',
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
        name: 'Hospitalizacion',
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
        name: 'Ambulatorio & Rehabilitacion',
        location: 'Cra 34 #21-117, Barrio Altamira',
        gmap: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1962.5309624680735!2d-75.42700429427363!3d10.336929568310975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDIwJzEyLjkiTiA3NcKwMjUnMzQuOSJX!5e0!3m2!1ses!2sco!4v1568912361917!5m2!1ses!2sco',
        reference: undefined,
        tel: undefined,
        cel: { Generales: ['315-3315223'] },
      },
      {
        name: 'Hospitalizacion',
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
    <div className="relative mt-8 isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-600">
                Bienvenido a ...
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                {actualCity.name}
              </h1>
            </div>
          </div>
        </div>

        <div className="md:-ml-12 -ml-0 lg:mt-8 md:p-12 pt-6 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden md:block text-gray-900">
          <span className="text-justify block">
            En el mapa actual, encontrarás la dirección de la sede de{' '}
            <strong className="font-semibold text-blue-600">
              {dataIframe.sede}{' '}
            </strong>
            . Si quieres explorar otras ubicaciones, simplemente haz clic en el
            nombre de la sede que te interese.
          </span>
          <div className="flex w-full sm:flex-row flex-col items-center mt-8 justify-center gap-4 cursor-pointer">
            {actualCity.offices.map((office) => (
              <span
                key={office.gmap}
                className={`inline-flex whitespace-nowrap rounded-md px-2 py-1 text-xl font-medium ${dataIframe.isActive === office.name
                  ? 'bg-green-50 text-green-600 ring-green-700/10'
                  : 'bg-blue-50 text-blue-600 ring-blue-700/10'
                  } ring-1 ring-inset`}
                onClick={() =>
                  setDataIframe({
                    sede: office.name,
                    url: office.gmap,
                    isActive: office.name,
                  })
                }
              >
                {office.name}
              </span>
            ))}
          </div>

          <iframe
            src={dataIframe.url}
            width="100%"
            height="450px"
            id="locations-offices"
            style={{ display: 'block', position: 'relative' }}
            className="mt-8 rounded-xl shadow-2xl"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`Mapa de ${dataIframe.sede}`}
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            {actualCity.offices.map((office) => (
              <div
                key={office.gmap}
                className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg"
              >
                <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                  {office.name}
                </h2>
                <ul role="list" className="mt-8 space-y-8 text-gray-600">
                  <li className="flex gap-x-3">
                    <MapPinIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span className="text-justify">
                      <strong className="font-semibold text-gray-900">
                        Dirección:
                      </strong>{' '}
                      {office.location}
                    </span>
                  </li>
                  {office.reference && (
                    <li className="flex gap-x-3">
                      <MapIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Punto de referencia:{' '}
                        </strong>
                        {office.reference}
                      </span>
                    </li>
                  )}
                  {office.tel && (
                    <li className="flex gap-x-3">
                      <PhoneIcon
                        className="mt-1 h-5 w-5 flex-none text-blue-600"
                        aria-hidden="true"
                      />
                      <span>
                        <strong className="font-semibold text-gray-900">
                          Telefonos:{' '}
                        </strong>
                        {office.tel.join(' / ')}
                      </span>
                    </li>
                  )}
                  <li className="flex gap-x-3">
                    <DevicePhoneMobileIcon
                      className="mt-1 h-5 w-5 flex-none text-blue-600"
                      aria-hidden="true"
                    />
                    <span>
                      {(() => {
                        const entries = Object.entries(office.cel)
                        const isGeneralesOnly =
                          entries.length === 1 && entries[0][0] === 'Generales'
                        if (isGeneralesOnly) {
                          const nums = entries[0][1]
                          return (
                            <>
                              <strong className="font-semibold text-gray-900">
                                {nums.length === 1 ? 'Celular' : 'Celulares'}:{' '}
                              </strong>
                              {nums.join(' / ')}
                            </>
                          )
                        }
                        return (
                          <>
                            <strong className="font-semibold text-gray-900">
                              Celulares:{' '}
                            </strong>
                            {entries.map(([key, values]) => (
                              <div key={key}>
                                <strong className="font-semibold text-gray-900">
                                  {key}:{' '}
                                </strong>
                                {values.join(' / ')}
                              </div>
                            ))}
                          </>
                        )
                      })()}
                    </span>
                  </li>
                </ul>
              </div>
            ))}

            <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-800 sm:text-2xl">
              Correos
            </h2>
            <ul role="list" className="mt-8 space-y-8 text-gray-600">
              <li className="flex gap-x-3">
                <EnvelopeIcon
                  className="mt-1 h-5 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Citas:
                  </strong>{' '}
                  {actualCity.emails.appointment}
                </span>
              </li>
              <li className="flex gap-x-3">
                <EnvelopeIcon
                  className="mt-1 h-5 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Administrativo:
                  </strong>{' '}
                  {actualCity.emails.admin}
                </span>
              </li>
              <li className="flex gap-x-3">
                <EnvelopeIcon
                  className="mt-1 h-5 w-5 flex-none text-blue-600"
                  aria-hidden="true"
                />
                <span>
                  <strong className="font-semibold text-gray-900">
                    Referencia y contrareferencia:
                  </strong>{' '}
                  {actualCity.emails.reference}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
