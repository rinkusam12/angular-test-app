import { Injectable } from '@angular/core';
import { Data, mockData } from './mock_data'
@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  activeValue = 'map';

  data = mockData;
  currentPage = 1;
  size = 10;
  
  constructor() { }

  currentData(): Data[] {
    const start = (this.currentPage - 1) * this.size;
    return this.data.slice(start, this.currentPage * this.size).map(c=>{
      return {
        ...c,
        status: c.status as Data['status'],
        address: c.street + ', ' + c.city + ', ' + c.state + ', ' + c.postal_code
      }
    })
  }

}
