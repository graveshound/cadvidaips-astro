import { useState, forwardRef, useEffect } from 'react'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  PopoverBackdrop,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid'
import InfoBanner from './InfoBanner'
import { motion, AnimatePresence } from 'framer-motion'

const MyLink = forwardRef(({ href, children, ...rest }, ref) => (
  <a href={href} ref={ref} {...rest}>
    {children}
  </a>
))
MyLink.displayName = 'MyLink'

const citys = [
  {
    name: 'Barranquilla',
    description: 'Hospitalización - Consulta externa - Hospital Día - Rehabilitación',
    href: '/contacto/barranquilla',
  },
  {
    name: 'Cartagena',
    description: 'Consulta externa - Hospital Día',
    href: '/contacto/cartagena',
  },
  {
    name: 'Magangué',
    description: 'Hospitalización - Consulta externa - Hospital Día',
    href: '/contacto/magangue',
  },
  {
    name: 'Montería',
    description: 'Hospitalización - Consulta externa - Hospital Día',
    href: '/contacto/monteria',
  },
  {
    name: 'Sincelejo',
    description: 'Hospitalización - Sede Ambulatoria - Hospital Día',
    href: '/contacto/sincelejo',
  },
  {
    name: 'Turbaco',
    description: 'Hospitalización - Rehabilitación - Consulta externa',
    href: '/contacto/turbaco',
  },
  {
    name: 'San Martín de Loba',
    description: 'Hospital Día',
    href: '/contacto/sanmartin',
  },
]

const callsToAction = [
  {
    name: 'Envíanos un correo',
    href: 'mailto:gerencia@cadvidaips.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Radica tu PQR',
    href: 'mailto:pqr@cadvidaips.com',
    icon: PencilSquareIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 lg:px-8 pt-4 transition-all duration-300 flex flex-col">
      <header
        className={classNames(
          "mx-auto w-full max-w-7xl rounded-full transition-all duration-300 border",
          scrolled
            ? "bg-white/80 backdrop-blur-lg shadow-lg border-white/20 py-2 px-6"
            : "bg-white/95 shadow-md border-transparent py-4 px-8"
        )}
      >
        <nav
          className="flex items-center justify-between"
          aria-label="Global"
        >
          {/* Logo */}
          <a href="/" className="-m-1.5 p-1.5 flex-shrink-0 transition-transform hover:scale-105">
            <div className="flex items-center gap-3 font-bold">
              <span className="sr-only">CADVIDA IPS</span>
              <img
                src="/assets/images/logo.png"
                alt="cadvida-logo"
                className="h-10 w-auto"
              />
              <p className="z-20 text-brand-blue text-lg hidden sm:block font-heading">CADVIDA IPS</p>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:gap-x-10 z-50 items-center">
            <a href="/" className="text-sm font-semibold leading-6 text-brand-blue hover:text-brand-green transition-colors">
              Inicio
            </a>
            <a
              href="/servicios"
              className="text-sm font-semibold leading-6 text-brand-blue hover:text-brand-green transition-colors"
            >
              Servicios
            </a>
            <a
              href="/quienes-somos"
              className="text-sm font-semibold leading-6 text-brand-blue hover:text-brand-green transition-colors"
            >
              Quiénes somos
            </a>

            <Popover className="relative">
              {({ close }) => (
                <>
                  <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-brand-blue hover:text-brand-green outline-none cursor-pointer transition-colors">
                    Contáctanos
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none text-brand-green"
                      aria-hidden="true"
                    />
                  </PopoverButton>

                  <PopoverBackdrop className="fixed inset-0 z-0 bg-transparent" onClick={() => close()} />

                  <PopoverPanel
                    transition
                    className="absolute left-1/2 -translate-x-1/2 top-full z-10 mt-5 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition data-[closed]:translate-y-2 data-[closed]:opacity-0 data-[enter]:duration-200 data-[enter]:ease-out data-[leave]:duration-150 data-[leave]:ease-in"
                  >
                    <div className="p-4 grid grid-cols-2 gap-2">
                      {citys.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex flex-col gap-x-6 rounded-2xl p-4 text-sm leading-6 hover:bg-brand-green/5 transition-colors"
                        >
                          <a
                            href={item.href}
                            onClick={() => close()}
                            className="block font-semibold text-brand-blue"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </a>
                          <p className="mt-1 text-xs text-gray-500 line-clamp-2">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-gray-50 border-t border-gray-100 p-4">
                      <a
                        href="/contacto"
                        onClick={() => close()}
                        className="flex items-center justify-center gap-x-2.5 rounded-xl p-3 text-sm font-semibold leading-6 text-brand-blue bg-white hover:bg-gray-100 ring-1 ring-inset ring-gray-200 transition-colors"
                      >
                        📍 Ver todas nuestras sedes principales
                      </a>
                    </div>
                    <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50 border-t border-gray-100">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-4 text-sm font-semibold leading-6 text-brand-blue hover:bg-gray-100 transition-colors"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-brand-green"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </PopoverPanel>
                </>
              )}
            </Popover>
          </div>

          {/* WhatsApp / Mobile burger */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:flex">
              <a
                href="https://wa.link/t6f9nc"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600 transition-colors"
              >
                <img
                  src="/assets/images/whatsapp.png"
                  alt="whatsapp"
                  className="h-5 w-5 brightness-0 invert"
                />
                WhatsApp
              </a>
            </div>

            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-brand-blue cursor-pointer"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Abrir menú principal</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, height: 0, margin: 0, overflow: 'hidden' }}
            className="mt-2 hidden sm:block"
          >
            <InfoBanner />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" aria-hidden="true" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 transition-transform">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <span className="sr-only">CADVIDA IPS</span>
              <img
                src="/assets/images/logo.png"
                alt="cadvida-logo"
                className="h-8 w-auto"
              />
              <span className="font-bold text-brand-blue">CADVIDA</span>
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:text-brand-blue cursor-pointer"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menú</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-blue hover:bg-gray-50"
                  >
                    Inicio
                  </a>
                  <a
                    href="/servicios"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-blue hover:bg-gray-50"
                  >
                    Servicios
                  </a>
                  <a
                    href="/quienes-somos"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-brand-blue hover:bg-gray-50"
                  >
                    Quiénes somos
                  </a>
                </div>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-brand-blue hover:bg-gray-50 group cursor-pointer">
                    Contáctanos
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none group-data-[open]:rotate-180 transition-transform"
                      aria-hidden="true"
                    />
                  </DisclosureButton>
                  <DisclosurePanel
                    className="mt-2 space-y-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {citys.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-brand-green/5 hover:text-brand-blue"
                      >
                        {item.name}
                      </a>
                    ))}
                    <a
                      href="/contacto"
                      className="block rounded-lg py-3 pl-6 pr-3 mt-2 text-sm font-bold leading-7 text-brand-blue bg-blue-50 hover:bg-blue-100"
                    >
                      📍 Ver todas las sedes
                    </a>
                    <div className="border-t border-gray-100 my-2 pt-2">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-700 hover:bg-brand-green/5 hover:text-brand-blue"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </DisclosurePanel>
                </Disclosure>
              </div>

              <div className="py-6" onClick={() => setMobileMenuOpen(false)}>
                <a
                  href="https://wa.link/t6f9nc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-green-500 hover:bg-green-600 justify-center transition-colors"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </div>
  )
}
