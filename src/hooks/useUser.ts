import { useEffect, useState } from 'react';
import { getAuthenticatedUser } from '@/providers';
import { AuthenticatedUser } from '@/types';
import { getAuthToken } from '@/utils';
import useProvider from './useProvider';

export default function useUser(): AuthenticatedUser | undefined {
  const [user, setUser] = useState<AuthenticatedUser>();

  const [runGetAuthenticatedUser, result] = useProvider(getAuthenticatedUser, {
    onComplete(data) {
      setUser({
        id: data.id,
        email: data.email,
        firstname: data.firstname,
        lastname: data.lastname,
        isAdmin: data.isAdmin,
        isSuperAdmin: data.isSuperAdmin,
      });
    },
  });

  useEffect(() => {
    if (getAuthToken() && !result?.called) {
      runGetAuthenticatedUser();
    }
  }, [runGetAuthenticatedUser, result?.called]);

  return user;
}
