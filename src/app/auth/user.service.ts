import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../shared/environment';
import { User } from '../shared/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }
}