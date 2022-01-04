import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable,throwError } from 'rxjs';
import { Category } from '../category/category';
import {tap,catchError} from 'rxjs/operators'

@Injectable()
export class CategoryService {
  path='http://localhost:3000/categories'

  constructor(private http:HttpClient) { }

  getCategories():Observable<Category[]>
  {
    

    return this.http.get<Category[]>(this.path).pipe
    (tap(data=>console.log(JSON.stringify(data))),
    catchError(this.handleError));
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
