import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Pais } from 'src/app/pais';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable()
export class PaisService {

  url = "api/pais";

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.url}`);
  }

  findById(id: number): Observable<Pais[]> {
    return this.http.get<Pais[]>(`${this.url}/${id}`);
  }

  save(pais: Pais){
    return this.http.post(`${this.url}`, JSON.stringify(pais), httpOptions);
  }

  delete(id: number){
      return this.http.delete(`${this.url}/${id}`);
  }

  // update(id: number): Observable<Pais[]>{
  //   return this.http.put<Pais[]>(`${this.url}/${id}`, Pais);
  // }

}
