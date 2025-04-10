
import { constructorChecks } from '@angular/cdk/schematics';
import {Component, Input, OnInit} from '@angular/core';
import { FormSubmittedEvent } from '@angular/forms';
import { EMPServiceService } from '../../Services/empservice.service';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeDetail } from '../../Services/employee-detail.model';


@Component({
  selector: 'app-home-page',
  standalone: false,
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit{
  snack: any;
  ed: any;
  empId: String | null=null;

  constructor(public empService: EMPServiceService,private roughter : Router,private _router: ActivatedRoute){ }
  
  public Emp={
    EmpName:'',
    EmpContact:'',
    EmpEmail:'',
    EmpAddress:'',

};

 // constructor(private http: HttpClient){}


  formSubmit(){
    this.empService.addEmp(this.Emp).subscribe(
      (data:any)=>{
           //success
          console.log(data);
         Swal.fire('Success Done!!', 'User id '+ data.id, 'success');
         //this.Emp.EmpId = '';
         this.Emp.EmpName ='';
         this.Emp.EmpContact= '';
         this.Emp.EmpEmail= '';
         this.Emp.EmpAddress= '';
        this.empService.getEmp();
    },
      (error: any)=>{
          //error
          console.log(error);
          Swal.fire('Please provide all the data...!');
       
    }
    
      );
    }
      ngOnInit(): void {
        this.empService.getEmp();
      //   this._router.paramMap.subscribe(params => {
      //     this.Id=params.get('id');
      //   }
      // );
      }




      onDelete(id: number){
          if(confirm('Are you sure to delete this record?'))
            this.empService.deleteEmp(id).subscribe({
              next: res => {
                this.empService.list = res as EmployeeDetail[]
                Swal.fire('Success Deleted!!', 'User id id '+ id, 'success');
                this.empService.getEmp();
              }
          }
        );
      }

  

    
    }

