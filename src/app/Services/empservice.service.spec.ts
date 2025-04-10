import { TestBed } from '@angular/core/testing';

import { EMPServiceService } from './empservice.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { HttpTestingController } from '@angular/common/http/testing';
import { mockEmployees } from '../Pages/mock-Data/mockEmployees.model';

fdescribe('EMPServiceService', () => {
  let service: EMPServiceService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, HttpTestingController],
    });
    service = TestBed.inject(EMPServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should call add Employee', () => {
    const empData = {
      empId: 4,
      empName: "John",
      empAddress: '123',
      empContact: '9999',
      empEmail: 'zxc@.com'
    };

    // Spy on the addEmp function to check if it's being called
    spyOn(service, 'addEmp').and.callThrough();
    service.addEmp(empData);
    expect(service.addEmp).toHaveBeenCalledWith(empData);
  });


it('should call delete perticular Employee', () => {

  const empId = 1;
  // Spy on the delete function to check if it's being called
  spyOn(service, 'deleteEmp').and.callThrough();
  service.deleteEmp(empId);
  expect(service.deleteEmp).toHaveBeenCalledWith(empId);
});




it('should call get all Employee', () => {
  // Spy on the get all employee function to check if it's being called
  spyOn(service, 'getEmp').and.callThrough();
  service.getEmp();
  expect(service.getEmp).toHaveBeenCalled();
});




it('should call get perticular Employee', () => {
  const empId = 1;
  // Spy on the get SingalEmp to check if it's being called
  spyOn(service, 'SingalEmp').and.callThrough();
  service.SingalEmp(empId);
  expect(service.SingalEmp).toHaveBeenCalledWith(empId);

});


it('should call UpdateEmp() function with correct parameters', () => {
  const empId = 1;
  const empData = { empId: 4,empName: "John", empAddress: '123', empContact: '9999',empEmail: 'zxc@.com' };

  // Spy on the UpdateEmp function
  spyOn(service, 'UpdateEmp').and.callThrough();

  service.UpdateEmp(empId, empData);

  // Verify that UpdateEmp was called with correct arguments
  expect(service.UpdateEmp).toHaveBeenCalledWith(empId, empData);
});



});




