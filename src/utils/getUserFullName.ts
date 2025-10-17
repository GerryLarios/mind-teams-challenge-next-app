export default function getUserFullName(user: {
  firstname?: string | null;
  lastname?: string | null;
}): string {
  return [user.firstname, user.lastname].filter((s) => s).join(' ');
}
