import { Component, PropsWithChildren } from 'react';
import ResetErrorBoundaryProvider from './context/resetErrorBoundaryContext';

type ErrorBoundaryProps = PropsWithChildren & {
  fallback?: React.ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  fetchKey: number;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, fetchKey: 1 };
    this.reset = this.reset.bind(this);
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  reset() {
    this.setState(({ fetchKey }) => ({ hasError: false, fetchKey: fetchKey + 1 }));
  }

  render() {
    const { children, fallback } = this.props;
    const { hasError, fetchKey } = this.state;

    return (
      <ResetErrorBoundaryProvider reset={this.reset} fetchKey={fetchKey}>
        {hasError ? fallback : children}
      </ResetErrorBoundaryProvider>
    );
  }
}

export default ErrorBoundary;
