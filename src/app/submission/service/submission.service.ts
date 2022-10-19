import { Injectable } from '@angular/core';
import { Data, mockData } from './mock_data'
@Injectable({
  providedIn: 'root',
})
export class SubmissionService {
  activeValue = 'map';

  filter = {
    task:"",
    from:"",
    status:"",
  }

  data = mockData;
  currentPage = 1;
  size = 10;
  
  constructor() { }

  filterData() {
    const filterData = this.data.filter((item) => {
      return (
        //partial match
        (this.filter.task ? item.task.includes(this.filter.task)  : true) &&
        (this.filter.from ? item.from.includes(this.filter.from)  : true) &&
        (this.filter.status ? item.status?.includes(this.filter.status) : true)
      );
    });
    return filterData;
  }

  currentData(): Data[] {
    const filterData = this.filterData();
    const start = (this.currentPage - 1) * this.size;
    return filterData.slice(start, this.currentPage * this.size).map(c=>{
      return {
        ...c,
        status: c.status as Data['status'],
        address: c.street + ', ' + c.city + ', ' + c.state + ', ' + c.postal_code
      }
    })
  }

}
