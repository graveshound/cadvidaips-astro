import { useState, forwardRef } from 'react'
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
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import {
  ChevronDownIcon,
  EnvelopeIcon,
  PencilSquareIcon,
} from '@heroicons/react/20/solid'
import InfoBanner from './InfoBanner'

const MyLink = forwardRef(({ href, children, ...rest }, ref) => (
  <a href={href} ref={ref} {...rest}>
    {children}
  </a>
))
MyLink.displayName = 'MyLink'

const citys = [
  {
    name: 'Barranquilla',
    description: 'Ambulatorio - Rehabilitacion',
    href: '/contacto/barranquilla',
  },
  {
    name: 'Cartagena',
    description: 'Hospitalizacion - Ambulatorio - Consulta externa',
    href: '/contacto/cartagena',
  },
  {
    name: 'Magangue',
    description: 'Hospitalizacion - Ambulatorio - Consulta externa',
    href: '/contacto/magangue',
  },
  {
    name: 'Monteria',
    description: 'Hospitalizacion - Ambulatorio - Consulta externa',
    href: '/contacto/monteria',
  },
  {
    name: 'Sincelejo',
    description: 'Hospitalizacion - Ambulatorio - Hospital Día',
    href: '/contacto/sincelejo',
  },
  {
    name: 'Turbaco',
    description: 'Rehabilitacion - Hospitalizacion - Consulta externa',
    href: '/contacto/turbaco',
  },
]

const callsToAction = [
  {
    name: 'Envianos un correo',
    href: 'mailto:gerencia@cadvidaips.com',
    icon: EnvelopeIcon,
  },
  {
    name: 'Radica tu PQR a pqr@cadvidaips.com',
    href: 'mailto:pqr@cadvidaips.com',
    icon: PencilSquareIcon,
  },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white w-full fixed top-0 left-0 right-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <a href="/" className="-m-1.5 p-1.5 lg:flex-1">
          <div className="flex items-center gap-2 font-bold">
            <span className="sr-only">CADVIDA IPS</span>
            <img
              src="/assets/images/logo.png"
              alt="cadvida-logo"
              width={32}
              height={32}
            />
            <p className="z-20 text-blue-900">CADVIDA IPS</p>
          </div>
        </a>

        {/* Mobile burger */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-blue-700 cursor-pointer"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Abrir menu principal</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Desktop nav */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12 z-50">
          <a href="/" className="text-sm font-semibold leading-6 text-blue-900">
            Inicio
          </a>
          <a
            href="/servicios"
            className="text-sm font-semibold leading-6 text-blue-900"
          >
            Servicios
          </a>
          <a
            href="/quienes-somos"
            className="text-sm font-semibold leading-6 text-blue-900"
          >
            Quienes somos
          </a>

          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-blue-900 outline-none cursor-pointer">
              Contactanos
              <ChevronDownIcon
                className="h-5 w-5 flex-none text-blue-600"
                aria-hidden="true"
              />
            </PopoverButton>

            <PopoverPanel
                transition
                className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-blue-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                {({ close }) => (
                  <>
                    <div className="p-4">
                      {citys.map((item) => (
                        <div
                          key={item.name}
                          className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-green-50"
                        >
                          <div className="flex-auto">
                            <a
                              href={item.href}
                              onClick={() => close()}
                              className="block font-semibold text-blue-900"
                            >
                              {item.name}
                              <span className="absolute inset-0" />
                            </a>
                            <p className="mt-1 text-blue-600">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-1 divide-x divide-blue-900/5 bg-green-50">
                      {callsToAction.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-blue-900 hover:bg-green-100"
                        >
                          <item.icon
                            className="h-5 w-5 flex-none text-blue-400"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </>
                )}
              </PopoverPanel>
          </Popover>

        </PopoverGroup>

        {/* WhatsApp */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://wa.link/t6f9nc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold leading-6 text-blue-900"
          >
            <div className="flex items-center">
              <span className="mr-2">Whatsapp</span>
              <img
                src="/assets/images/whatsapp.png"
                alt="whatsapp"
                width={24}
                height={24}
              />
            </div>
          </a>
        </div>
      </nav>

      {/* Mobile dialog */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-blue-900/10">
          <div className="flex items-center justify-between">
            <a href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CADVIDA IPS</span>
              <img
                src="/assets/images/logo.png"
                alt="cadvida-logo"
                width={32}
                height={32}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-blue-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Cerrar menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-green-500/10">
              <div className="space-y-2 py-6">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <a
                    href="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-green-50"
                  >
                    Inicio
                  </a>
                  <a
                    href="/servicios"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-green-50"
                  >
                    Servicios
                  </a>
                  <a
                    href="/quienes-somos"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-blue-900 hover:bg-green-50"
                  >
                    Quienes somos
                  </a>
                </div>

                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-blue-900 hover:bg-green-50 group cursor-pointer">
                    Contactanos
                    <ChevronDownIcon
                      className="h-5 w-5 flex-none group-data-open:rotate-180 transition-transform"
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
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-900 hover:bg-green-50"
                      >
                        {item.name}
                      </a>
                    ))}
                    {callsToAction.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-blue-900 hover:bg-green-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
              </div>

              <div className="py-6" onClick={() => setMobileMenuOpen(false)}>
                <a
                  href="https://wa.link/t6f9nc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-blue-900 hover:bg-green-50"
                >
                  Whatsapp
                </a>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>

      {!mobileMenuOpen && <InfoBanner />}
    </header>
  )
}
