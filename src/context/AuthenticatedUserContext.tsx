import React, { createContext } from 'react';
import { UserResult } from '@/types';
import useUser from '@/hooks/useUser';

type AuthenticatedUserContextValue = {
  user?: UserResult;
};

export const AuthenticatedUserContext = createContext<AuthenticatedUserContextValue>({
  user: undefined,
});

export const AuthenticatedUserProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  const user = useUser();

  return (
    <AuthenticatedUserContext.Provider value={{ user }}>
      {children}
    </AuthenticatedUserContext.Provider>
  );
};
