import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
          <h2 className="text-2xl font-bold text-text-primary">Something went wrong.</h2>
          <p className="text-text-secondary mt-2">Please try refreshing the page or contact support if the problem persists.</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90"
          >
            Refresh Page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
