import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden bg-black">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/44zrIZf-iQZhbQNQ/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient vignette so text is readable */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(147,197,253,0.18),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(192,132,252,0.18),transparent_35%),linear-gradient(to_bottom,rgba(0,0,0,0.25),rgba(0,0,0,0.65))]"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 pb-24 text-center md:pt-36">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 backdrop-blur">
          <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400"></span>
          Live on-chain insights
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-5 bg-gradient-to-br from-white via-white to-white/70 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          KryptoMark
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-4 max-w-2xl text-base text-white/70 sm:text-lg"
        >
          A sleek gateway to the crypto markets. Real-time data, institutional-grade analytics, and a futuristic aesthetic—built for the next bull run.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-8 flex flex-col items-center gap-3 sm:flex-row"
        >
          <a
            href="#get-started"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-cyan-400 px-6 py-3 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-transform hover:scale-[1.02]"
          >
            <span className="relative z-10">Launch App</span>
            <span className="pointer-events-none absolute inset-0 translate-y-10 bg-white/30 opacity-0 blur-lg transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
          </a>
          <a
            href="#features"
            className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white/90 backdrop-blur transition-colors hover:bg-white/10"
          >
            Explore Features
          </a>
        </motion.div>

        {/* Floating shimmer pill */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="pointer-events-none mt-12"
        >
          <div className="mx-auto h-10 w-64 rounded-full bg-gradient-to-r from-cyan-400/20 via-white/20 to-fuchsia-400/20 blur-2xl"></div>
        </motion.div>
      </div>
    </section>
  )
}
