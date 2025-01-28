import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { map, Observable } from 'rxjs';
import { INTERNAL_SIGN_IN_MUTATION } from '../graphql/graphql.operations';
import { Mutation, MutationInternalSignInArgs } from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private apollo: Apollo) {}

  internalSignIn(email: string, password: string) {
    return this.apollo
      .mutate<Mutation, MutationInternalSignInArgs>({
        mutation: INTERNAL_SIGN_IN_MUTATION,
        variables: { email, password },
      })
      .pipe(map((result) => result.data?.internalSignIn));
  }
}
