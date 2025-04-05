
import { constructorChecks } from '@angular/cdk/schematics';
import {Component, Input, OnInit} from '@angular/core';
import { FormSubmittedEvent } from '@angular/forms';
import { EMPServiceService } from '../../Services/empservice.service';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
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

  constructor(public empService: EMPServiceService,private roughter : Router){ }
  
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
          this.roughter.navigate(['/'])
        // this.empService.getEmp();
    },
      (error: any)=>{
          //error
          console.log(error);
          Swal.fire('Please provide all the data...!');
        //  this.snack.open('somthing went wrong','ok',{
        //  });
    }
    
      );
    }
      ngOnInit(): void {
        this.empService.getEmp();
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
  

      newpage(){
        
this.roughter.navigate(['./update'])
      }
  

    
    }

  // onSubmit(){
  //   console.log(this.Emp);
  //     this.http.post('http://localhost:5244/api/EmployeePOCWebApis',this.Emp).subscribe(response => {
  //       console.log('Employee added', response);
  //     },error => {
  //       console.log('Error adding Employee', error);
  //   });












    // this.empService.addEmp(this.Emp).subscribe((data:any)=>{
    //   Swal.fire('Employee Detail Successfuly Added.'+ data.EmpId, 'success');
    // },
    // (error : any)=>{Swal.fire('Error Adding Employee...!'+ 'Fail');
    // }
    // );
    
    //}


    // ngOnInit(): void {
    //   throw new Error('Method not implemented.');
    // }

//}

