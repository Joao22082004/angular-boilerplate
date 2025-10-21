import { HttpClient } from '@angular/common/http';
import id from '@angular/common/locales/id';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {
  private apiUrl = 'https://node-vercel-app-rho.vercel.app/api/funcionarios';

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get(this.apiUrl)
  }

  getUserById(id?: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  deleteUserById(id?: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  updateById(id: string, dados: any) {
    return this.http.put(`https://sua-api.com/api/funcionarios/${id}`, dados);
  }

  postFuncionarios(formulario: any) {
    return this.http.post(this.apiUrl, formulario)

  }
}
