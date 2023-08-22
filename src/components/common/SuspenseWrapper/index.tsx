import { ReactNode, Suspense } from 'react';

import Loader from '../Loader';

type SuspenseWrapperProps = {
  children: ReactNode;
};
const SuspenseWrapper = ({ children }: SuspenseWrapperProps) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

export default SuspenseWrapper;
