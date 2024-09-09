import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../core//services/environments/environment.service';

@Injectable({
  providedIn: 'root'
})
export class AllordersService {

  
  constructor(private _HttpClient : HttpClient) { }
  

 
   getAllorders():Observable<any>{
    return this._HttpClient.get(`${environment.baseUrl}/api/v1/orders/`)
   }
 




 
}