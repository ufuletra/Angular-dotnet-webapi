import { Component, OnInit } from '@angular/core';
import { FormSubmittedEvent } from '@angular/forms';
import { EMPServiceService } from '../../Services/empservice.service';
import { HttpClient } from '@angular/common/http';

import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeDetail } from '../../Services/employee-detail.model';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent implements OnInit {
  Empid: any;
  Emp: any;

  constructor(public empService: EMPServiceService,private roughter : Router,private _router: ActivatedRoute){ }
  ngOnInit(): void {
    this._router.paramMap.subscribe(params => {
          this.Empid=params.get('id');
        }
      );
  }
  
  public newEmp={
    EmpId: 0,
    EmpName:'',
    EmpContact:'',
    EmpEmail:'',
    EmpAddress:'',

};




Update(){

  console.log(this.Empid+'---------'+ typeof this.Empid);
  console.log("--------------------------");
    this.newEmp.EmpId=this.Empid;
    this.empService.UpdateEmp(this.Empid,this.newEmp).subscribe(
      (data:any)=>{
           //success
          console.log(data);
         Swal.fire('Update Successfully Employee Details!!', 'Employee id '+ this.Empid, 'success');
         this.roughter.navigate(['./']);
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


}