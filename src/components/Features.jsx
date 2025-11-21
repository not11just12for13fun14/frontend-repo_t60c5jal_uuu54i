import { motion } from 'framer-motion'
import { Shield, LineChart, Zap, Wallet } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Bank-grade Security',
    desc: 'End-to-end encryption and hardware-backed authentication keep your assets safe.'
  },
  {
    icon: LineChart,
    title: 'Real-time Analytics',
    desc: 'Streaming prices, on-chain metrics, and AI-powered signals in one dashboard.'
  },
  { icon: Zap, title: 'Lightning Fast', desc: 'Optimized for speed with a cutting-edge, lightweight stack.' },
  { icon: Wallet, title: 'Multi-chain Support', desc: 'Track portfolios across Ethereum, Solana, Base, and more.' }
]

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_20%_0%,rgba(99,102,241,0.15),transparent),radial-gradient(600px_300px_at_80%_0%,rgba(236,72,153,0.15),transparent)]" />
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center text-3xl font-bold sm:text-4xl"
        >
          Built for the future of finance
        </motion.h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:gap-8">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-lg font-semibold">{f.title}</h3>
              <p className="text-white/70">{f.desc}</p>
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-gradient-to-br from-indigo-500/20 to-fuchsia-500/20 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
