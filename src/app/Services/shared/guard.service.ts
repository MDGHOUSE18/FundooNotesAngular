import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  constructor() { }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
