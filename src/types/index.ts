export type ValueOf<T> = T[keyof T];

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
