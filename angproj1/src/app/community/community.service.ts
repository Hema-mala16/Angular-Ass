import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IComment } from './comment';

@Injectable({
  providedIn: 'root'
})
export class CommunityService {
  comment:IComment[]
  private entryUrl:string = 'https://localhost:44341/api/commentapi'
  constructor(private _httpClient:HttpClient) { }
  
  getEntry():Observable<IComment[]>{
    return this._httpClient.get<IComment[]>(this.entryUrl).pipe(
tap((data)=>console.log(`All Entry: ${JSON.stringify(data)}`)),
catchError(this.handleError)
    )
  }
  handleError(err){
    let errorMsg=''
    if(err.error instanceof Error){
      errorMsg = `An error occured : ${err.error.message}`;
    }
    else{
      errorMsg = `Server returned code: ${err.status} error message is : ${err.message}`
    }
    console.log(errorMsg)
    return throwError
  }
}

// getProduct(id: number): Observable<IProduct> {
//   const url = `${this.productUrl}/${id}`;
//    return this._httpClient.get<IProduct>(url)
//   .pipe(
//     tap((data) =>console.log(`fetched Product id=${id}`)),
//     catchError(this.handleError)
//   );
// }
