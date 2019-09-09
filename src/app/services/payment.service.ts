import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IList, User } from '../models';
import { AuthenticationService } from '../services';

@Injectable({ providedIn: 'root' })
export class PaymentService {
    currentUser: User;
    constructor(private http: HttpClient,private authenticationService: AuthenticationService,) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    getAll(): Observable<IList> {
        return this.http.get<IList>(`http://localhost:8080/payments?userId=${this.currentUser.user.id}`)

    }

    create(payment: Object): Observable<IList> {
        return this.http.post<IList>(`http://localhost:8080/payments`, payment);
    }
}