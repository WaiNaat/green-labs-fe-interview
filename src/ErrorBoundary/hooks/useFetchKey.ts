import { useContext } from 'react';
import { ResetErrorBoundaryContext } from '../context/resetErrorBoundaryContext';

/**
 * 가장 가까운 ErrorBoundary의 fetchKey 상태를 받아옵니다.
 * 에러바운더리 초기화 시 refetch를 위함입니다.
 * @returns number
 */
const useFetchKey = () => {
  const context = useContext(ResetErrorBoundaryContext);

  if (!context) throw new Error('usefetchKey는 ErrorBoundary 하위 컴포넌트에서 호출해야 합니다.');

  return context.fetchKey;
};

export default useFetchKey;
