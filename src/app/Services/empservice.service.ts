import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
//import baseUrl from './helper';
import { environment } from '../../environments/environment.development';
import { EmployeeDetail } from '../Services/employee-detail.model';

@Injectable({
  providedIn: 'root'
})
export class EMPServiceService {

  constructor(private http: HttpClient) {

   }


url:string = environment.apiBaseUrl+'/EmployeePOCWebApis'
list: EmployeeDetail[] = [];

public addEmp(Emp:any){
  return this.http.post(this.url,Emp);
}

public deleteEmp(EmpId:number){
  return this.http.delete(this.url+'/'+EmpId);
}

public SingalEmp(EmpId:number){
  return this.http.get(this.url+'/'+EmpId);
}

public UpdateEmp(EmpId:number,Emp:any){
  return this.http.post(this.url+'/'+EmpId,Emp);
}





public getEmp(){
  this.http.get(this.url).subscribe({next: res => 
    {
      console.log(res)
      this.list=res as EmployeeDetail[];
    },
    error: err => { console.log(err);}
  })
}


}