'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface ProjectInputProps {
  onStart: (prompt: string) => void
}

export default function ProjectInput({ onStart }: ProjectInputProps) {
  const [prompt, setPrompt] = useState('')
  const [selectedTemplate, setSelectedTemplate] = useState<string | null>(null)

  const templates = [
    { id: 'todo', name: 'Todo App', prompt: 'Create a todo app with dark mode, categories, and local storage', icon: '✅' },
    { id: 'ecommerce', name: 'E-commerce', prompt: 'Build an e-commerce site with product catalog, cart, and checkout', icon: '🛒' },
    { id: 'dashboard', name: 'Analytics Dashboard', prompt: 'Create an analytics dashboard with charts and real-time data', icon: '📊' },
    { id: 'blog', name: 'Blog Platform', prompt: 'Build a blog platform with markdown support and comments', icon: '📝' },
    { id: 'chat', name: 'Chat App', prompt: 'Create a real-time chat application with rooms and user presence', icon: '💬' },
    { id: 'social', name: 'Social Network', prompt: 'Build a social network with posts, likes, and user profiles', icon: '👥' },
  ]

  const handleTemplateSelect = (template: typeof templates[0]) => {
    setSelectedTemplate(template.id)
    setPrompt(template.prompt)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (prompt.trim()) {
      onStart(prompt)
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Templates */}
      <div>
        <h3 className="text-white text-lg font-semibold mb-4">Quick Start Templates</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {templates.map((template, index) => (
            <motion.button
              key={template.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              onClick={() => handleTemplateSelect(template)}
              className={`p-4 rounded-lg border-2 transition-all ${
                selectedTemplate === template.id
                  ? 'border-purple-500 bg-purple-500/20'
                  : 'border-purple-500/20 bg-slate-800/50 hover:border-purple-500/50'
              }`}
            >
              <div className="text-3xl mb-2">{template.icon}</div>
              <div className="text-white font-medium text-sm">{template.name}</div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Custom Input */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="prompt" className="block text-white text-lg font-semibold mb-3">
            Or describe your project
          </label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe what you want to build... e.g., 'Create a productivity app with task management, calendar integration, and team collaboration features'"
            className="w-full h-32 px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 resize-none"
            required
          />
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg shadow-lg transition-all glow-effect"
        >
          🧞 Generate Project with AI Collective
        </motion.button>
      </form>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        <div className="text-center p-4">
          <div className="text-3xl mb-2">⚡</div>
          <div className="text-white font-medium mb-1">45 Seconds Avg</div>
          <div className="text-purple-300 text-sm">Lightning fast generation</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl mb-2">🎯</div>
          <div className="text-white font-medium mb-1">96/100 Quality</div>
          <div className="text-purple-300 text-sm">Production-ready code</div>
        </div>
        <div className="text-center p-4">
          <div className="text-3xl mb-2">🚀</div>
          <div className="text-white font-medium mb-1">99.5% Success</div>
          <div className="text-purple-300 text-sm">Reliable deployment</div>
        </div>
      </div>
    </div>
  )
}
