import { Component } from '@angular/core';
import { FormSubmittedEvent } from '@angular/forms';
import { EMPServiceService } from '../../Services/empservice.service';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { EmployeeDetail } from '../../Services/employee-detail.model';

@Component({
  selector: 'app-update',
  standalone: false,
  templateUrl: './update.component.html',
  styleUrl: './update.component.scss'
})
export class UpdateComponent {
  EmpId: any;
  ed: any;

  constructor(public empService: EMPServiceService,private roughter : Router){ }
  
  public Emp={
    EmpName:'',
    EmpContact:'',
    EmpEmail:'',
    EmpAddress:'',

};


Update(){
    this.empService.UpdateEmp(this.EmpId,this.Emp).subscribe(
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


}