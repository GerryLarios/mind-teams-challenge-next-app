import { UserDisplay } from '@/types';

export default function shouldDisplayUserEmail(user: UserDisplay) {
  return !user.firstname && !user.lastname;
}
