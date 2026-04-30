import { MegaphoneIcon } from '@heroicons/react/24/outline'

export default function InfoBanner() {
  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-white/95 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-2.5 sm:px-3.5 mx-auto max-w-7xl shadow-sm">
      <div className="flex flex-wrap items-center justify-center self-center w-full gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-brand-blue flex items-center gap-2">
          <MegaphoneIcon className="h-5 w-5 text-brand-green animate-pulse" />
          <strong className="font-semibold hidden sm:inline text-brand-blue">
            ⛑️ Recupera tu vida, un paso a la vez.
          </strong>
          <svg
            viewBox="0 0 2 2"
            className="mx-2 h-0.5 w-0.5 fill-current hidden md:inline-block opacity-50"
            aria-hidden="true"
          >
            <circle cx={1} cy={1} r={1} />
          </svg>
          <span className="inline-block font-medium text-gray-700">Estamos aquí para ayudarte, contáctanos hoy.</span>
        </p>
      </div>
    </div>
  )
}
