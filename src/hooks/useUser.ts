import { useEffect } from 'react';
import { getAuthenticatedUser } from '@/providers';
import { UserResult } from '@/types';
import { getAuthToken } from '@/utils';
import useProvider from './useProvider';

export default function useUser(): UserResult | undefined {
  const [runGetAuthenticatedUser, { called, data }] = useProvider(getAuthenticatedUser);

  useEffect(() => {
    if (getAuthToken() && !called) {
      runGetAuthenticatedUser();
    }
  }, [runGetAuthenticatedUser, called]);

  return data;
}
