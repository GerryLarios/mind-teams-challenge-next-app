import { useContext } from 'react';
import { AuthenticatedUserContext } from '@/context';

export default function useAuthenticatedUser() {
  const { user } = useContext(AuthenticatedUserContext);

  return user;
}
