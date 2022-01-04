import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable,throwError } from 'rxjs';
import { Product } from '../product/product';
import {tap,catchError} from 'rxjs/operators'


@Injectable()
export class SepetService {

  path='http://localhost:3000/Sepet'

  constructor(private http:HttpClient) { }

  getSepet():Observable<Product[]>
  {
    

    return this.http.get<Product[]>(this.path).pipe
    (tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError));
  }

  addProduct(product:Product): Observable<Product>{
    const httpOptions = {
      headers:new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Token'
      })
    }
    return this.http.post<Product>(this.path,product).pipe(
      tap(data=> console.log(JSON.stringify(data))),
      catchError(this.handleError)
    )
  }


  handleError(err:HttpErrorResponse)
  {
    let errorMessage=""
    if(err.error instanceof ErrorEvent)
    {
      errorMessage="Bir Hata Olustu"
    }
    else
    {
      errorMessage="Sistemsel Bir Hata Olustu"
    }
    return throwError(errorMessage)
  }
}
