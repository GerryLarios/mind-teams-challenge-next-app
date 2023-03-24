import type { FriendlyError } from '@/utils';

export type ValueOf<T> = T[keyof T];

export enum LenguageLevel {
  C1 = 'C1',
  C2 = 'C2',
  B2 = 'B2',
  B1 = 'B1',
  A2 = 'A2',
  A1 = 'A1',
}

export enum DashboardView {
  ACCOUNT_MANAGEMENT = 'TEAM_MANAGEMENT',
  CLIENT_MANAGEMENT = 'CLIENT_MANAGEMENT',
  TECHNOLOGY_MANAGEMENT = 'TECHNOLOGY_MANAGEMENT',
  USER_MANAGEMENT = 'USER_MANAGEMENT',
}

export enum ProfileView {
  EDIT_PASSWORD = 'EDIT_PASSWORD',
  EDIT_PROFILE = 'EDIT_PROFILE',
  EDIT_USER = 'EDIT_USER',
}

export type UseProviderResult<TResult> = {
  called: boolean;
  loading: boolean;
  error?: Error | FriendlyError | unknown;
  data?: TResult;
};

export type CreateAccount = {
  name: string;
  clientId: string;
  userMemberIds: string[];
  userResponsibleId: string;
};

export type UpdateAccount = Partial<CreateAccount>;

export type AuthFormData = {
  email: string;
  password: string;
};

export type UserInformationFormData = {
  email: string;
  firstname: string;
  lastname: string;
};

type Technology = {
  id: string;
  name: string;
};

type UserTechnologies = {
  id: string;
  years: number;
  technology: Technology;
};

export type ProfileResult = {
  id: string;
  resume: string | null;
  lenguageLevel: LenguageLevel | null;
  createdAt: string;
  updatedAt: string;
  technologies: UserTechnologies | null;
};

export type UserResult = {
  id: string;
  firstname: string | null;
  lastname: string | null;
  email: string;
  isAdmin: true;
  isSuperAdmin: true;
  active: true;
  createdAt: string;
  updatedAt: string;
  profile: ProfileResult | null;
};

export type AuthenticatedUser = Omit<UserResult, 'active' | 'createdAt' | 'updatedAt' | 'profile'>;
export type UserAvatarInfo = { firstname?: string | null; lastname?: string | null };
export type UserDisplay = Pick<UserResult, 'email' | 'firstname' | 'lastname'>;
