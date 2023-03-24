import { useAuthenticatedUser } from '@/hooks';

export default function User() {
  const user = useAuthenticatedUser();

  return <h1>{user?.email}</h1>;
}
