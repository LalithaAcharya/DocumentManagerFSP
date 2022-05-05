import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Doc } from './Doc';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http:HttpClient) { }
  
private url =  "http://localhost:8089"

  public getval():Observable<Doc[]>{
    return  this.http.get<Doc[]>(`${this.url}/getdoc`)
}

public delval(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/deldoc/${id}`)
}

public addval(Doc:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/adddoc`,Doc)
}

public updateval(id:number,doc:Doc):Observable<Object>{
  return this.http.put(`${this.url}/updatedoc/${id}`,doc)
}

public getvalbyid(id:number):Observable<Doc>{
  return this.http.get<Doc>(`${this.url}/getdocbyid/${id}`)
}

public addCustomer(Customer:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/customer`,Customer)
}

}
