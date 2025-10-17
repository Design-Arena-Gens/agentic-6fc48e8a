'use client'

import { motion } from 'framer-motion'

export default function Analytics() {
  const stats = [
    { label: 'Avg. Generation Time', value: '45s', change: '↓13%', changeColor: 'text-green-400' },
    { label: 'Avg. Quality Score', value: '96/100', change: '+2 points', changeColor: 'text-green-400' },
    { label: 'Success Rate', value: '99.5%', change: '↑0.3%', changeColor: 'text-green-400' },
    { label: 'AI Selection Accuracy', value: '98%', change: '↑1%', changeColor: 'text-green-400' },
  ]

  const recentProjects = [
    { name: 'E-commerce Dashboard', time: '42s', score: 97, status: 'deployed' },
    { name: 'Chat Application', time: '38s', score: 95, status: 'deployed' },
    { name: 'Blog Platform', time: '51s', score: 98, status: 'deployed' },
    { name: 'Task Manager', time: '35s', score: 96, status: 'deployed' },
  ]

  const aiPerformance = [
    { name: 'GPT-4', usage: 35, avgTime: '2.3s', quality: 98 },
    { name: 'Claude 3', usage: 28, avgTime: '2.1s', quality: 97 },
    { name: 'Gemini', usage: 12, avgTime: '1.8s', quality: 95 },
    { name: 'CodeLlama', usage: 10, avgTime: '1.2s', quality: 92 },
    { name: 'DeepSeek', usage: 8, avgTime: '1.5s', quality: 93 },
    { name: 'Others', usage: 7, avgTime: '1.6s', quality: 91 },
  ]

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-6">Platform Analytics</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-slate-900/50 rounded-lg p-4"
            >
              <div className="text-purple-400 text-sm mb-2">{stat.label}</div>
              <div className="flex items-end justify-between">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className={`text-sm font-medium ${stat.changeColor}`}>{stat.change}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <h3 className="text-white font-semibold mb-4">Recent Projects</h3>
            <div className="space-y-2">
              {recentProjects.map((project, index) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-900/50 rounded-lg p-3 flex items-center justify-between"
                >
                  <div>
                    <div className="text-white font-medium text-sm">{project.name}</div>
                    <div className="text-purple-400 text-xs">
                      {project.time} • Score: {project.score}
                    </div>
                  </div>
                  <span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">
                    {project.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">AI Performance Metrics</h3>
            <div className="space-y-3">
              {aiPerformance.map((ai, index) => (
                <motion.div
                  key={ai.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-slate-900/50 rounded-lg p-3"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium text-sm">{ai.name}</span>
                    <span className="text-purple-400 text-xs">{ai.usage}% usage</span>
                  </div>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="text-purple-300">
                      Avg: <span className="text-white">{ai.avgTime}</span>
                    </div>
                    <div className="text-purple-300">
                      Quality: <span className="text-white">{ai.quality}</span>
                    </div>
                  </div>
                  <div className="mt-2 w-full bg-slate-700 rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-purple-500 to-pink-500 h-1 rounded-full"
                      style={{ width: `${ai.usage}%` }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-6"
        >
          <div className="text-3xl mb-2">🧠</div>
          <div className="text-white font-semibold mb-1">Self-Evolution</div>
          <div className="text-purple-300 text-sm">
            System learns from every project to improve quality and speed
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-lg p-6"
        >
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-white font-semibold mb-1">Smart Routing</div>
          <div className="text-purple-300 text-sm">
            Auto-selects optimal AI based on task complexity and requirements
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-6"
        >
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-white font-semibold mb-1">Quality First</div>
          <div className="text-purple-300 text-sm">
            Every project scored on security, performance, and maintainability
          </div>
        </motion.div>
      </div>
    </div>
  )
}
