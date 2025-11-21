import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-white">
        <a href="#" className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-cyan-400" />
          <span className="text-sm font-semibold tracking-wide">KryptoMark</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#faq" className="hover:text-white">FAQ</a>
          <a href="#get-started" className="rounded-lg bg-white/10 px-4 py-2 font-medium text-white hover:bg-white/15">Launch</a>
        </nav>

        <button className="md:hidden" aria-label="Open menu" onClick={() => setOpen(!open)}>
          <Menu className="h-6 w-6 text-white" />
        </button>
      </div>
      {open && (
        <div className="border-t border-white/10 bg-black/90 px-6 py-4 text-white md:hidden">
          <a href="#features" className="block py-2">Features</a>
          <a href="#pricing" className="block py-2">Pricing</a>
          <a href="#faq" className="block py-2">FAQ</a>
          <a href="#get-started" className="mt-2 block rounded-lg bg-white/10 px-4 py-2 text-center font-medium">Launch</a>
        </div>
      )}
    </header>
  )
}
