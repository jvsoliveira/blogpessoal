import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from '../model/User';
import { UserLogin } from '../model/UserLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  login(userLogin: UserLogin): Observable<UserLogin>{
    return this.http.post<UserLogin>('https://blogpessoaljvso.herokuapp.com/usuarios/logar', userLogin)
  }

  register(user: User): Observable<User>{
    return this.http.post<User>('https://blogpessoaljvso.herokuapp.com/usuarios/cadastrar', user)
  }

  getByIdUser(id:number): Observable<User>{
    return this.http.get<User>(`https://blogpessoaljvso.herokuapp.com/usuarios/${id}`)
  }

  logado() {
    let ok: boolean = false

    if(environment.token != ''){
      ok = true
    }

    return ok
  }


}
