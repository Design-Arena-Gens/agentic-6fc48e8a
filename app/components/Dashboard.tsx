'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface Agent {
  id: number
  name: string
  role: string
  status: 'idle' | 'working' | 'completed' | 'error'
  progress: number
  currentTask: string
  aiProvider: string
  icon: string
}

interface DashboardProps {
  prompt: string
  onComplete: () => void
}

export default function Dashboard({ prompt, onComplete }: DashboardProps) {
  const [agents, setAgents] = useState<Agent[]>([
    { id: 1, name: 'Architect', role: 'System Design', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'GPT-4', icon: '🏗️' },
    { id: 2, name: 'Frontend', role: 'UI Development', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'Claude 3', icon: '🎨' },
    { id: 3, name: 'Backend', role: 'API Development', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'GPT-4', icon: '⚙️' },
    { id: 4, name: 'Database', role: 'Data Layer', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'CodeLlama', icon: '🗄️' },
    { id: 5, name: 'Security', role: 'Security Audit', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'Qwen', icon: '🔒' },
    { id: 6, name: 'Tester', role: 'Quality Assurance', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'DeepSeek', icon: '🧪' },
    { id: 7, name: 'Optimizer', role: 'Performance', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'GPT-4', icon: '⚡' },
    { id: 8, name: 'Designer', role: 'UX/UI Design', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'Gemini', icon: '🎭' },
    { id: 9, name: 'DevOps', role: 'Deployment', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'Claude 3', icon: '🚀' },
    { id: 10, name: 'Documenter', role: 'Documentation', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'GPT-3.5', icon: '📚' },
    { id: 11, name: 'Reviewer', role: 'Code Review', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'Claude 3', icon: '👁️' },
    { id: 12, name: 'Coordinator', role: 'Orchestration', status: 'idle', progress: 0, currentTask: 'Waiting...', aiProvider: 'GPT-4', icon: '🎯' },
  ])

  const [overallProgress, setOverallProgress] = useState(0)
  const [timeElapsed, setTimeElapsed] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeElapsed(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    simulateAgentWork()
  }, [])

  const simulateAgentWork = async () => {
    const tasks = [
      { agentId: 12, task: 'Analyzing project requirements', duration: 2000 },
      { agentId: 1, task: 'Designing system architecture', duration: 3000 },
      { agentId: 8, task: 'Creating UI mockups', duration: 2500 },
      { agentId: 2, task: 'Building frontend components', duration: 4000 },
      { agentId: 3, task: 'Developing API endpoints', duration: 3500 },
      { agentId: 4, task: 'Setting up database schema', duration: 3000 },
      { agentId: 5, task: 'Running security audit', duration: 2500 },
      { agentId: 6, task: 'Running test suite', duration: 3000 },
      { agentId: 7, task: 'Optimizing performance', duration: 2500 },
      { agentId: 10, task: 'Generating documentation', duration: 2000 },
      { agentId: 11, task: 'Reviewing code quality', duration: 2500 },
      { agentId: 9, task: 'Preparing deployment', duration: 2000 },
    ]

    for (const task of tasks) {
      setAgents(prev => prev.map(agent =>
        agent.id === task.agentId
          ? { ...agent, status: 'working', currentTask: task.task }
          : agent
      ))

      await new Promise(resolve => setTimeout(resolve, task.duration / 10))

      for (let i = 0; i <= 100; i += 10) {
        await new Promise(resolve => setTimeout(resolve, task.duration / 100))
        setAgents(prev => prev.map(agent =>
          agent.id === task.agentId
            ? { ...agent, progress: i }
            : agent
        ))
        setOverallProgress(prev => Math.min(prev + 0.8, 100))
      }

      setAgents(prev => prev.map(agent =>
        agent.id === task.agentId
          ? { ...agent, status: 'completed', progress: 100 }
          : agent
      ))
    }

    setOverallProgress(100)
    setTimeout(() => {
      onComplete()
    }, 1000)
  }

  const getStatusColor = (status: Agent['status']) => {
    switch (status) {
      case 'working': return 'bg-blue-500'
      case 'completed': return 'bg-green-500'
      case 'error': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  return (
    <div className="space-y-6">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <div className="text-purple-400 text-sm font-medium mb-2">Overall Progress</div>
          <div className="text-3xl font-bold text-white">{Math.round(overallProgress)}%</div>
          <div className="w-full bg-slate-700 rounded-full h-2 mt-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <div className="text-purple-400 text-sm font-medium mb-2">Active Agents</div>
          <div className="text-3xl font-bold text-white">
            {agents.filter(a => a.status === 'working').length}/12
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <div className="text-purple-400 text-sm font-medium mb-2">Time Elapsed</div>
          <div className="text-3xl font-bold text-white">{formatTime(timeElapsed)}</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
        >
          <div className="text-purple-400 text-sm font-medium mb-2">Completed Tasks</div>
          <div className="text-3xl font-bold text-white">
            {agents.filter(a => a.status === 'completed').length}/12
          </div>
        </motion.div>
      </div>

      {/* Project Info */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-6"
      >
        <h3 className="text-white font-semibold mb-2">Project Prompt</h3>
        <p className="text-purple-300">{prompt}</p>
      </motion.div>

      {/* Agent Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            className="bg-slate-800/50 backdrop-blur-lg border border-purple-500/20 rounded-lg p-4 card-hover"
          >
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">{agent.icon}</span>
                <div>
                  <h4 className="text-white font-semibold text-sm">{agent.name}</h4>
                  <p className="text-purple-400 text-xs">{agent.role}</p>
                </div>
              </div>
              <div className={`w-3 h-3 rounded-full ${getStatusColor(agent.status)} animate-pulse`} />
            </div>

            <div className="mb-3">
              <div className="flex justify-between text-xs text-purple-300 mb-1">
                <span>Progress</span>
                <span>{agent.progress}%</span>
              </div>
              <div className="w-full bg-slate-700 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${agent.progress}%` }}
                />
              </div>
            </div>

            <div className="text-xs text-purple-300 mb-2">
              <span className="font-medium">AI:</span> {agent.aiProvider}
            </div>

            <div className="text-xs text-gray-400 italic truncate">
              {agent.currentTask}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
