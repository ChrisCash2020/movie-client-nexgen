import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS } from '../graphql/graphql.operations';
import { map, Observable } from 'rxjs';
import { User } from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apollo: Apollo) {}

  getUsers(): Observable<User[]> {
    return this.apollo
      .query<any>({
        query: GET_USERS,
      })
      .pipe(
        map((result) => {
          return result.data.getUsers;
        })
      );
  }
}
