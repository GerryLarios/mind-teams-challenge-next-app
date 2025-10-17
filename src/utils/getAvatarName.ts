import { UserAvatarInfo } from '@/types';

export default function getAvatarName(user: UserAvatarInfo) {
  return (
    [user?.firstname, user?.lastname]
      .filter((s) => s)
      .map((s) => s?.trimStart()[0]?.toUpperCase())
      .join('') || '@'
  );
}
