'use client'

import { useState, useEffect } from 'react'
import Dashboard from './components/Dashboard'
import ProjectInput from './components/ProjectInput'
import AgentVisualization from './components/AgentVisualization'
import QualityReport from './components/QualityReport'
import DeploymentPanel from './components/DeploymentPanel'
import Analytics from './components/Analytics'

export default function Home() {
  const [projectPrompt, setProjectPrompt] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)
  const [currentPhase, setCurrentPhase] = useState<'input' | 'generation' | 'review' | 'deploy'>('input')

  const handleStartGeneration = (prompt: string) => {
    setProjectPrompt(prompt)
    setIsGenerating(true)
    setCurrentPhase('generation')
  }

  const handleGenerationComplete = () => {
    setIsGenerating(false)
    setCurrentPhase('review')
  }

  const handleReset = () => {
    setProjectPrompt('')
    setIsGenerating(false)
    setCurrentPhase('input')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-purple-500/20 backdrop-blur-lg bg-slate-900/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-2xl">
                🧞
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">GenieCode v3.0</h1>
                <p className="text-sm text-purple-300">The AI Collective</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium">
                ✓ All Systems Operational
              </span>
              <button
                onClick={handleReset}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
              >
                New Project
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        {currentPhase === 'input' && (
          <div className="space-y-8">
            <div className="text-center space-y-4 py-12">
              <h2 className="text-5xl font-bold text-white mb-4">
                Build Anything with AI
              </h2>
              <p className="text-xl text-purple-300 max-w-3xl mx-auto">
                12 specialized AI agents working together to create, test, and deploy your application
              </p>
            </div>
            <ProjectInput onStart={handleStartGeneration} />
            <Analytics />
          </div>
        )}

        {currentPhase === 'generation' && (
          <div className="space-y-6">
            <Dashboard prompt={projectPrompt} onComplete={handleGenerationComplete} />
            <AgentVisualization />
          </div>
        )}

        {currentPhase === 'review' && (
          <div className="space-y-6">
            <QualityReport />
            <DeploymentPanel projectPrompt={projectPrompt} />
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-purple-500/20 mt-16">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold mb-4">Features</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li>• 12-AI Agent System</li>
                <li>• Dynamic AI Selection</li>
                <li>• Self-Evolution Engine</li>
                <li>• Real-time Monitoring</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Deployment</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li>• Vercel</li>
                <li>• Netlify</li>
                <li>• AWS</li>
                <li>• Docker Export</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">AI Providers</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li>• GPT-4 & Claude 3</li>
                <li>• CodeLlama & DeepSeek</li>
                <li>• Gemini & Qwen</li>
                <li>• 15+ Total Providers</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-4">Security</h3>
              <ul className="space-y-2 text-purple-300 text-sm">
                <li>• Isolated Containers</li>
                <li>• Zero Data Retention</li>
                <li>• Input Sanitization</li>
                <li>• No API Key Storage</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-purple-400 text-sm">
            <p>© 2025 GenieCode v3.0 - The AI Collective | Production Ready | Self-Evolving</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
