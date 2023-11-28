import { useContext } from 'react';
import { ResetErrorBoundaryContext } from '../context/resetErrorBoundaryContext';

/**
 * 가장 가까운 ErrorBoundary의 hasError 상태를 초기화합니다.
 * @returns 콜백 함수
 */
const useResetErrorBoundary = () => {
  const context = useContext(ResetErrorBoundaryContext);

  if (!context)
    throw new Error('useResetErrorBoundary는 ErrorBoundary 하위 컴포넌트에서 호출해야 합니다.');

  return context.reset;
};

export default useResetErrorBoundary;
