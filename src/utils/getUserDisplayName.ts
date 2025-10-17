import { UserDisplay } from '@/types';
import getUserFullName from './getUserFullName';
import shouldDisplayUserEmail from './shouldDisplayUserEmail';

export default function getUserDisplayName(user: UserDisplay) {
  return shouldDisplayUserEmail(user) ? user.email : getUserFullName(user);
}
