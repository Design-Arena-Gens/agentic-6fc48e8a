'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface DeploymentPanelProps {
  projectPrompt: string
}

export default function DeploymentPanel({ projectPrompt }: DeploymentPanelProps) {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null)
  const [isDeploying, setIsDeploying] = useState(false)
  const [deploymentStatus, setDeploymentStatus] = useState<'idle' | 'deploying' | 'success' | 'error'>('idle')
  const [deploymentUrl, setDeploymentUrl] = useState('')

  const platforms = [
    {
      id: 'vercel',
      name: 'Vercel',
      icon: '▲',
      color: 'from-black to-gray-800',
      features: ['Instant deployment', 'Edge functions', 'Analytics'],
      recommended: true,
    },
    {
      id: 'netlify',
      name: 'Netlify',
      icon: '🌐',
      color: 'from-teal-500 to-cyan-500',
      features: ['Continuous deployment', 'Serverless functions', 'Forms'],
    },
    {
      id: 'aws',
      name: 'AWS',
      icon: '☁️',
      color: 'from-orange-500 to-yellow-500',
      features: ['S3 + CloudFront', 'Lambda functions', 'Global CDN'],
    },
    {
      id: 'docker',
      name: 'Docker',
      icon: '🐳',
      color: 'from-blue-500 to-blue-600',
      features: ['Containerized', 'Self-hosted', 'Offline capable'],
    },
    {
      id: 'railway',
      name: 'Railway',
      icon: '🚂',
      color: 'from-purple-500 to-pink-500',
      features: ['Git integration', 'Database included', 'Auto scaling'],
    },
    {
      id: 'render',
      name: 'Render',
      icon: '🎨',
      color: 'from-green-500 to-emerald-500',
      features: ['Zero config', 'Auto deploy', 'Free SSL'],
    },
  ]

  const handleDeploy = async (platformId: string) => {
    setSelectedPlatform(platformId)
    setIsDeploying(true)
    setDeploymentStatus('deploying')

    // Simulate deployment
    await new Promise(resolve => setTimeout(resolve, 3000))

    setDeploymentStatus('success')
    setDeploymentUrl(`https://my-project.${platformId}.app`)
    setIsDeploying(false)
  }

  const handleDownload = (format: 'code' | 'docker') => {
    alert(`Downloading ${format === 'code' ? 'source code' : 'Docker container'}...`)
  }

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
      >
        <h2 className="text-2xl font-bold text-white mb-4">Deploy Your Project</h2>
        <p className="text-purple-300 mb-6">
          Choose a deployment platform or download your project for manual deployment
        </p>

        {deploymentStatus === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg"
          >
            <div className="flex items-center space-x-2 text-green-400 mb-2">
              <span className="text-xl">✓</span>
              <span className="font-semibold">Deployment Successful!</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-purple-300 text-sm">Your project is live at:</span>
              <a
                href={deploymentUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline text-sm"
              >
                {deploymentUrl}
              </a>
            </div>
          </motion.div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {platforms.map((platform, index) => (
            <motion.div
              key={platform.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={`relative bg-gradient-to-br ${platform.color} rounded-lg p-6 cursor-pointer card-hover ${
                selectedPlatform === platform.id ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => !isDeploying && handleDeploy(platform.id)}
            >
              {platform.recommended && (
                <div className="absolute -top-2 -right-2 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full">
                  Recommended
                </div>
              )}
              <div className="text-4xl mb-3">{platform.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{platform.name}</h3>
              <ul className="space-y-1 mb-4">
                {platform.features.map((feature) => (
                  <li key={feature} className="text-white/80 text-xs flex items-center space-x-1">
                    <span>•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {isDeploying && selectedPlatform === platform.id ? (
                <div className="mt-4">
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <motion.div
                      className="bg-white h-2 rounded-full"
                      initial={{ width: '0%' }}
                      animate={{ width: '100%' }}
                      transition={{ duration: 3 }}
                    />
                  </div>
                  <p className="text-white text-xs mt-2 text-center">Deploying...</p>
                </div>
              ) : (
                <button className="w-full mt-4 bg-white/20 hover:bg-white/30 text-white py-2 rounded-lg text-sm font-medium transition-colors">
                  Deploy Now
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <h3 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
            <span>💾</span>
            <span>Download Options</span>
          </h3>
          <div className="space-y-3">
            <button
              onClick={() => handleDownload('code')}
              className="w-full flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900/70 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📦</span>
                <div className="text-left">
                  <div className="text-white font-medium">Source Code</div>
                  <div className="text-purple-300 text-xs">Complete project files (.zip)</div>
                </div>
              </div>
              <span className="text-purple-400">→</span>
            </button>
            <button
              onClick={() => handleDownload('docker')}
              className="w-full flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900/70 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🐳</span>
                <div className="text-left">
                  <div className="text-white font-medium">Docker Container</div>
                  <div className="text-purple-300 text-xs">Ready to run locally</div>
                </div>
              </div>
              <span className="text-purple-400">→</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <h3 className="text-white text-xl font-semibold mb-4 flex items-center space-x-2">
            <span>📱</span>
            <span>Mobile App</span>
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-slate-900/50 rounded-lg">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">📱</span>
                <div className="text-white font-medium">React Native APK</div>
              </div>
              <p className="text-purple-300 text-xs mb-3">
                Generate Android app without Android Studio
              </p>
              <button className="w-full py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-medium transition-colors">
                Generate APK
              </button>
            </div>
            <div className="p-4 bg-slate-900/50 rounded-lg opacity-50">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-2xl">🍎</span>
                <div className="text-white font-medium">iOS App (Coming Soon)</div>
              </div>
              <p className="text-purple-300 text-xs">
                iOS app generation in development
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 rounded-lg p-6"
      >
        <div className="flex items-start space-x-3">
          <span className="text-2xl">💡</span>
          <div>
            <h3 className="text-white font-semibold mb-2">Deployment Tips</h3>
            <ul className="space-y-1 text-purple-300 text-sm">
              <li>• All environment variables are configured automatically</li>
              <li>• HTTPS certificates are managed for you</li>
              <li>• CI/CD pipelines are set up for future updates</li>
              <li>• Monitoring and analytics are enabled by default</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
