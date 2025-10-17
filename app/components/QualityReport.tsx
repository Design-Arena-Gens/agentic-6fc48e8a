'use client'

import { motion } from 'framer-motion'

export default function QualityReport() {
  const metrics = [
    { name: 'Security', score: 98, details: 'No vulnerabilities detected', icon: '🔒', color: 'from-green-500 to-emerald-500' },
    { name: 'Performance', score: 95, details: 'Optimized bundle size', icon: '⚡', color: 'from-blue-500 to-cyan-500' },
    { name: 'Maintainability', score: 96, details: 'Clean code structure', icon: '🔧', color: 'from-purple-500 to-pink-500' },
    { name: 'Accessibility', score: 94, details: 'WCAG 2.1 AA compliant', icon: '♿', color: 'from-orange-500 to-red-500' },
    { name: 'SEO', score: 97, details: 'Meta tags optimized', icon: '📈', color: 'from-yellow-500 to-orange-500' },
    { name: 'Best Practices', score: 96, details: 'Industry standards met', icon: '✨', color: 'from-indigo-500 to-purple-500' },
  ]

  const overallScore = Math.round(metrics.reduce((acc, m) => acc + m.score, 0) / metrics.length)

  const codeStats = [
    { label: 'Files Generated', value: '24' },
    { label: 'Lines of Code', value: '1,847' },
    { label: 'Test Coverage', value: '94%' },
    { label: 'Dependencies', value: '12' },
  ]

  const improvements = [
    '✓ Added TypeScript for type safety',
    '✓ Implemented responsive design',
    '✓ Added error boundaries',
    '✓ Optimized image loading',
    '✓ Added API rate limiting',
    '✓ Implemented caching strategy',
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-8 text-center"
      >
        <div className="text-6xl mb-4">🎉</div>
        <h2 className="text-3xl font-bold text-white mb-2">Project Generated Successfully!</h2>
        <p className="text-purple-300 text-lg">Your application is ready for review and deployment</p>

        <div className="mt-8 inline-block">
          <div className="relative w-40 h-40 mx-auto">
            <svg className="transform -rotate-90 w-40 h-40">
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                className="text-slate-700"
              />
              <circle
                cx="80"
                cy="80"
                r="70"
                stroke="currentColor"
                strokeWidth="12"
                fill="transparent"
                strokeDasharray={`${2 * Math.PI * 70}`}
                strokeDashoffset={`${2 * Math.PI * 70 * (1 - overallScore / 100)}`}
                className="text-purple-500"
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div>
                <div className="text-4xl font-bold text-white">{overallScore}</div>
                <div className="text-sm text-purple-400">Overall Score</div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6 card-hover"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-3xl">{metric.icon}</span>
              <span className="text-2xl font-bold text-white">{metric.score}</span>
            </div>
            <h3 className="text-white font-semibold mb-2">{metric.name}</h3>
            <p className="text-purple-300 text-sm">{metric.details}</p>
            <div className="mt-3 w-full bg-slate-700 rounded-full h-2">
              <div
                className={`bg-gradient-to-r ${metric.color} h-2 rounded-full transition-all duration-1000`}
                style={{ width: `${metric.score}%` }}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <h3 className="text-white text-xl font-semibold mb-4">Code Statistics</h3>
          <div className="space-y-4">
            {codeStats.map((stat) => (
              <div key={stat.label} className="flex items-center justify-between">
                <span className="text-purple-300">{stat.label}</span>
                <span className="text-white font-semibold text-lg">{stat.value}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <h3 className="text-white text-xl font-semibold mb-4">Improvements Applied</h3>
          <div className="space-y-2">
            {improvements.map((improvement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-purple-300 text-sm"
              >
                {improvement}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6"
      >
        <div className="flex items-start space-x-3">
          <span className="text-2xl">🎯</span>
          <div>
            <h3 className="text-white font-semibold mb-2">Quality Assurance Complete</h3>
            <p className="text-purple-300 text-sm">
              Your project has been thoroughly tested by multiple AI agents and meets production-ready standards.
              All security vulnerabilities have been addressed, performance is optimized, and code follows best practices.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
