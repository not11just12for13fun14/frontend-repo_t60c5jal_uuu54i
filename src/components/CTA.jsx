import { motion } from 'framer-motion'

export default function CTA() {
  return (
    <section id="get-started" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(400px_200px_at_80%_120%,rgba(99,102,241,0.15),transparent)]" />
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="text-3xl font-bold sm:text-4xl">Start trading smarter</h3>
          <p className="mt-2 max-w-xl text-white/70">Join thousands of traders using KryptoMark to analyze markets, monitor portfolios, and act on real-time signals.</p>
        </div>
        <motion.a
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          href="#"
          className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20"
        >
          Create Free Account
        </motion.a>
      </div>
    </section>
  )
}
