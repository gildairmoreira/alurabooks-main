import { ReactNode } from 'react';

interface TesteQuerryBranchProps {
  children: ReactNode;
}

function TesteQuerryBranch({ children }: TesteQuerryBranchProps) {
  return (
    <>
      <h1>TesteQuerryBranch</h1>
      {children}
    </>
  );
}


export default TesteQuerryBranch;
