export interface IClient {
  name: string;
  preferred_username: string;
  given_name: string;
  family_name: string;
  email: string;
  resource_access: {
    applications: Array<{ resource: string; roles: Array<string> }>;
    account_roles: Array<string>;
  };
}
