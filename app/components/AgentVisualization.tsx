'use client'

import { motion } from 'framer-motion'

export default function AgentVisualization() {
  const aiProviders = [
    { name: 'GPT-4', tasks: 4, color: 'from-green-500 to-emerald-500' },
    { name: 'Claude 3', tasks: 3, color: 'from-orange-500 to-red-500' },
    { name: 'Gemini', tasks: 1, color: 'from-blue-500 to-indigo-500' },
    { name: 'CodeLlama', tasks: 1, color: 'from-purple-500 to-pink-500' },
    { name: 'DeepSeek', tasks: 1, color: 'from-cyan-500 to-blue-500' },
    { name: 'Qwen', tasks: 1, color: 'from-yellow-500 to-orange-500' },
    { name: 'GPT-3.5', tasks: 1, color: 'from-teal-500 to-green-500' },
  ]

  const connections = [
    { from: 0, to: 1 }, { from: 0, to: 2 }, { from: 1, to: 3 },
    { from: 2, to: 4 }, { from: 3, to: 5 }, { from: 4, to: 6 },
  ]

  return (
    <div className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6">
      <h3 className="text-white text-xl font-semibold mb-6">AI Provider Network</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
        {aiProviders.map((provider, index) => (
          <motion.div
            key={provider.name}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="relative"
          >
            <div className={`p-4 rounded-lg bg-gradient-to-br ${provider.color} shadow-lg`}>
              <div className="text-white font-semibold text-sm text-center mb-2">
                {provider.name}
              </div>
              <div className="text-white text-xs text-center opacity-90">
                {provider.tasks} {provider.tasks === 1 ? 'task' : 'tasks'}
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-lg bg-white opacity-0"
              animate={{ opacity: [0, 0.3, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-slate-900/50 rounded-lg p-4">
          <h4 className="text-purple-400 font-medium mb-3">Task Distribution</h4>
          <div className="space-y-2">
            {aiProviders.map((provider) => (
              <div key={provider.name} className="flex items-center justify-between">
                <span className="text-white text-sm">{provider.name}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-24 bg-slate-700 rounded-full h-2">
                    <div
                      className={`bg-gradient-to-r ${provider.color} h-2 rounded-full`}
                      style={{ width: `${(provider.tasks / 12) * 100}%` }}
                    />
                  </div>
                  <span className="text-purple-300 text-xs w-8 text-right">{provider.tasks}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-900/50 rounded-lg p-4">
          <h4 className="text-purple-400 font-medium mb-3">AI Selection Logic</h4>
          <div className="space-y-3 text-sm">
            <div className="flex items-start space-x-2">
              <div className="text-green-400 mt-1">✓</div>
              <div>
                <div className="text-white font-medium">Simple Tasks</div>
                <div className="text-purple-300 text-xs">Free models: CodeLlama, DeepSeek</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-green-400 mt-1">✓</div>
              <div>
                <div className="text-white font-medium">Complex Tasks</div>
                <div className="text-purple-300 text-xs">Premium: GPT-4, Claude 3</div>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <div className="text-green-400 mt-1">✓</div>
              <div>
                <div className="text-white font-medium">Specialized Tasks</div>
                <div className="text-purple-300 text-xs">Domain experts: Qwen, Gemini</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 p-4 bg-purple-500/10 border border-purple-500/30 rounded-lg">
        <div className="flex items-center space-x-2 text-purple-300">
          <span className="text-lg">💡</span>
          <span className="text-sm">
            <strong>Smart Routing:</strong> Tasks are automatically distributed to the most suitable AI based on complexity, specialty, and availability
          </span>
        </div>
      </div>
    </div>
  )
}
