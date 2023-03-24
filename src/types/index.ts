import type { FriendlyError } from '@/utils';

export type ValueOf<T> = T[keyof T];

export type UseProviderResult<TResult> = {
  called: boolean;
  loading: boolean;
  error?: Error | FriendlyError | unknown;
  data?: TResult;
};

export enum LenguageLevel {
  C1 = 'C1',
  C2 = 'C2',
  B2 = 'B2',
  B1 = 'B1',
  A2 = 'A2',
  A1 = 'A1',
}

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
  lenguageLevel: LenguageLevel;
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
