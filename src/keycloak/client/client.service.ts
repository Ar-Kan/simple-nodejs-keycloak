import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { IClient } from './Client.model';

@Injectable({ scope: Scope.REQUEST })
export class ClientService {
  constructor(@Inject(REQUEST) private readonly request: Request) {}

  user(): IClient {
    // @ts-ignore (Property 'kauth' does not exist on type 'Request<ParamsDictionary, any, any, ParsedQs>')
    const access_token = this.request.kauth.grant.access_token.content;

    const account_roles: Array<string> = [
      ...access_token.resource_access.account.roles,
    ];

    let apps_roles: Array<{ resource: string; roles: Array<string> }> = [];

    for (const key in access_token.resource_access) {
      if (key === 'account') {
        continue;
      }

      apps_roles.push({
        resource: key,
        roles: [...access_token.resource_access[key]['roles']],
      });
    }

    const client: IClient = {
      name: access_token.name,
      preferred_username: access_token.preferred_username,
      given_name: access_token.given_name,
      family_name: access_token.family_name,
      email: access_token.email,
      resource_access: {
        applications: apps_roles,
        account_roles: account_roles,
      },
    };
    return JSON.parse(JSON.stringify(client));
  }
}
