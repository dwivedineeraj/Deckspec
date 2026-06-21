"use client"

import { Component } from "react"

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <p className="text-lg text-gray-500 mb-2">Something went wrong</p>
            <p className="text-sm text-gray-400">Please try refreshing the page.</p>
          </div>
        </div>
      )
    }
    return this.props.children
  }
}
