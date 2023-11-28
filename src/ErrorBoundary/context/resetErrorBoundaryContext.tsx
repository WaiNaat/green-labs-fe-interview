import { PropsWithChildren, createContext } from 'react';

type ResetErrorBoundaryContextProps = PropsWithChildren & {
  reset: () => void;
  fetchKey: number;
};

export const ResetErrorBoundaryContext = createContext<ResetErrorBoundaryContextProps | null>(null);

const ResetErrorBoundaryProvider = (props: ResetErrorBoundaryContextProps) => {
  const { children, reset, fetchKey } = props;

  return (
    <ResetErrorBoundaryContext.Provider value={{ reset, fetchKey }}>
      {children}
    </ResetErrorBoundaryContext.Provider>
  );
};

export default ResetErrorBoundaryProvider;
